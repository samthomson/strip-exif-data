import * as fs from 'fs'
import * as path from 'path'

const checkForEnvVarsOrExit = (): void => {
	const { DIR_IN, DIR_OUT } = process.env
	if (!DIR_IN || !DIR_OUT) {
		console.log('env vars must be set')
		process.exit()
	}
}

const readAllJPEGsFromSeedDir = async (): Promise<string[]> => {
	const paths = await fs.readdirSync(path.resolve('/dir_in')).filter(filePath => path.extname(filePath).toLowerCase() === '.jpg')

	return paths
}

const stripImage = async (filePath: string): Promise<boolean> => {

	try {
		return true
	} catch (err) {
		return false
	}
}

const stripImages = async (filePaths: string[]): Promise<void> => {
	let successes = 0, failures = 0

	for (let i = 0; i < filePaths.length; i++) {
		const filePathToStrip = filePaths[i]
		if (await stripImage(filePathToStrip)) {
			successes++
		} else {
			failures++
		}
	}
	console.log(`completed stripping ${filePaths.length} images. ${successes} were successful and ${failures} failed.`)
}

const main = async () => {
	checkForEnvVarsOrExit()
	const paths = await readAllJPEGsFromSeedDir()
	stripImages([paths[0]])
}

main()