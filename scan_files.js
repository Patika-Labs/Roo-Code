#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const { minimatch } = require("minimatch")

/**
 * =====================
 * CONFIGURATION
 * =====================
 */

// Directories to scan
const DIRECTORIES = ["./packages/types/dist/", "./src/dist/"]

// Glob patterns (empty = all files)
const FILE_PATTERNS = ["**/*.js", "**/en/*.json"]
const IGNORE_PATTERNS = ["**/*.d.ts", "**/*.d.cts", "**/*.js.map", "**/*.cjs.map"]
// How much surrounding text to print / inspect
const CONTEXT_WINDOW = 128

// Base match (roo, roo-code, roo code, roocode)
const TARGET_REGEX = /\broo(?:\s|-)?code\b|\broocode\b|\broo\b|\bRooVeterinaryInc\b/gi

const ALLOWED_STRINGS = [
	{ value: `Roo Code Cloud`, offset: 0 },
	{ value: `(such as Claude Code, Cline, Roo Code, and Kilo Code)`, offset: -29 },
	{ value: `// src/providers/roo.ts`, offset: -17 },
	{ value: `provider: "roo"`, offset: -11 },
	{ value: `case "roo":`, offset: -6 },
	{ value: `{ apiProvider: z8.literal("roo") }`, offset: -27 },
	{ value: `hasExistingModel ? "openrouter" : "roo"`, offset: -35 },
	{ value: `z14.enum(["openrouter", "roo"])`, offset: -25 },
	{ value: `roo: "apiModelId",`, offset: 0 },
	{ value: `provider && ["vercel-ai-gateway", "roo"].includes(provider)`, offset: -35 },
	{ value: `roo: { id: "roo", label: "Roo Code Cloud", models: [] }`, offset: 0 },
	{ value: `roo: { id: "roo", label: "Roo Code Cloud", models: [] }`, offset: -12 },
	{ value: `"unbound",\n  "roo",\n  "chutes"`, offset: -14 },
	{ value: `"qwen-code",\n  "roo",\n  "sambanova"`, offset: -16 },

	{ value: `provider:"roo"`, offset: -10 },
	{ value: `case"roo":`, offset: -5 },
	{ value: `{apiProvider:b.literal("roo")}`, offset: -24 },
	{ value: `b.enum(["openrouter","roo"])`, offset: -22 },
	{ value: `roo:{id:"roo",label:"Roo Code Cloud",models:[]}`, offset: 0 },
	{ value: `roo:{id:"roo",label:"Roo Code Cloud",models:[]}`, offset: -9 },
	{ value: `"unbound","roo","chutes"`, offset: -11 },
	{ value: `"qwen-code","roo","sambanova"`, offset: -13 },
	{ value: `["vercel-ai-gateway","roo"]`, offset: -22 },
	{ value: `"roo": {`, offset: -1 },
	{ value: `"X-Roo-App-Version"`, offset: -3 },
	{ value: `"X-Roo-Task-ID"`, offset: -3 },
	{ value: `process.env.ROO_CODE_PROVIDER_URL??"https://api.roocode.com/proxy"`, offset: -48 },
	{ value: `Roo provider requires cloud authentication. Please sign in to Roo Code Cloud.`, offset: 0 },
	{ value: `("tools:generateImage.roo.authRequired")`, offset: -22 },
	{ value: `("roo")||{}`, offset: -2 },
	{ value: `("roo",`, offset: -2 },
	{ value: `this.context.globalState.update("roo-provider-model",`, offset: -33 },
	{ value: `this.context.globalState.update("roo-auth-skip-model",`, offset: -33 },
	{ value: `outputChannel:process.env.PKG_OUTPUT_CHANNEL||"Roo-Code",`, offset: -47 },
	{ value: `?.publisher??"RooVeterinaryInc",`, offset: -14 },
	{ value: `?.name??"roo-cline",`, offset: -9 },
	{ value: `="roo-cline";`, offset: -2 },
	{ value: `="RooVeterinaryInc"`, offset: -2 },
]

/**
 * =====================
 * HELPERS
 * =====================
 */

function walk(dir, files = []) {
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const fullPath = path.join(dir, entry.name)
		if (entry.isDirectory()) walk(fullPath, files)
		else files.push(fullPath)
	}
	return files
}

function isTargetFile(file) {
	const normalized = file.split(path.sep).join("/")

	if (IGNORE_PATTERNS.some((p) => minimatch(normalized, p))) {
		return false
	}

	if (FILE_PATTERNS.length === 0) return true

	return FILE_PATTERNS.some((p) => minimatch(normalized, p, { dot: true }))
}

/**
 * =====================
 * SCAN LOGIC
 * =====================
 */

function scanFile(file) {
	const content = fs.readFileSync(file, "utf8")
	const violations = []

	loop: for (const match of content.matchAll(TARGET_REGEX)) {
		const index = match.index ?? 0
		const start = Math.max(0, index - CONTEXT_WINDOW)
		const end = Math.min(content.length, index + CONTEXT_WINDOW)
		const context = content.slice(start, end)

		const indexInContext = index - start

		for (const { value, offset } of ALLOWED_STRINGS) {
			const position = indexInContext + offset
			if (position < 0) {
				continue
			}
			if (context.startsWith(value, position)) {
				continue loop
			}
		}

		violations.push({
			match: match[0],
			context,
			reason: "Forbidden phrase without override",
		})
	}

	return violations
}

/**
 * =====================
 * RUN
 * =====================
 */

let failed = false

for (const dir of DIRECTORIES) {
	const files = walk(dir).filter(isTargetFile)

	for (const file of files) {
		const violations = scanFile(file)

		if (violations.length > 0) {
			failed = true
			console.error(`\n❌ ${file}`)
			for (const v of violations) {
				console.error(`   Reason: ${v.reason}`)
				console.error(`   Match: "${v.match}"`)
				console.error(`   Context: …${v.context}…\n`)
			}
		}
	}
}

if (failed) {
	console.error("❌ Scan failed")
	process.exit(1)
} else {
	console.log("✅ Scan passed")
}
