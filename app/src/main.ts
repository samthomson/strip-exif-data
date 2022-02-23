import * as Module from './module'

const checkForEnvVarsOrExit = (): void => {
	const { DIR_IN, DIR_OUT } = process.env
	if (!DIR_IN || !DIR_OUT) {
		console.log('env vars must be set')
		process.exit()
	}
}

const main = () => {
	checkForEnvVarsOrExit()
	console.log('made it past initial var check')
}

main()