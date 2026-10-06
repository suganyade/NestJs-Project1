import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profiledto';
export declare class ProfilesService {
    private profiles;
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
    update(id: string, updateProfileDto: UpdateProfileDto): {};
    remove(id: string): void;
}
