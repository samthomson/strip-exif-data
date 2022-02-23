import * as fs from 'fs'
import * as path from 'path'

const checkForEnvVarsOrExit = (): void => {
	const { DIR_IN, DIR_OUT } = process.env
	if (!DIR_IN || !DIR_OUT) {
		console.log('env vars must be set')
		process.exit()
	}
}

const readAllFilesFromSeedDir = async (): Promise<string[]> => {
	const paths = await fs.readdirSync(path.resolve('/dir_in'))

	return paths
}

const main = async () => {
	checkForEnvVarsOrExit()
	const paths = await readAllFilesFromSeedDir()
	console.log(paths)
}

main()