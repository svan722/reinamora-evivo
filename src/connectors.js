// connectors.ts
import { initializeConnector, Web3ReactHooks } from '@web3-react/core'
import { Connector, Web3ReactStore } from '@web3-react/types'
import { Phantom } from 'web3-react-phantom'

const phantom = initializeConnector((actions) => new Phantom({ actions }))

const connectors = [phantom]

export default connectors