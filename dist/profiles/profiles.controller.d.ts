import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profiledto';
import { ProfilesService } from './profiles.service';
export declare class ProfilesController {
    private profilesService;
    constructor(profilesService: ProfilesService);
    findAll(): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
        author: string;
    }[];
    findOne(id: string): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
        author: string;
    } | undefined;
    create(createProfileDto: CreateProfileDto): {
        name: string;
        description: string;
        author: string;
        id: `${string}-${string}-${string}-${string}-${string}`;
    };
    update(id: string, updateProfile: UpdateProfileDto): {};
    remove(id: string): void;
}
