import { IStartupService } from "./interfaces";

class StartupService implements IStartupService {
    getShit() {
        return "givin u shit";
    }
}

export default new StartupService();
