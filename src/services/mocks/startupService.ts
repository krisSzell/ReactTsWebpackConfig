import { IStartupService } from "services/interfaces";

class StartupService implements IStartupService {
    getShit() {
        return "Givin u MOCK shit";
    }
}

export default new StartupService();
