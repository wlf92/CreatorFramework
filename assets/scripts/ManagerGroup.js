import { NetManager } from './manager/NetManager'

export class ManagerGroup {
    constructor() {
        this._net = new NetManager()
    }
}