"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
let ProfilesService = class ProfilesService {
    profiles = [
        {
            id: (0, crypto_1.randomUUID)(),
            name: "Harry Potter",
            description: "It's a fantastic fictional movie",
            author: "J.K Rowling"
        },
        {
            id: (0, crypto_1.randomUUID)(),
            name: "The Hobbit",
            description: "A fantasy adventure story",
            author: "J.R.R Tolkien"
        },
        {
            id: (0, crypto_1.randomUUID)(),
            name: "Avengers",
            description: "Superhero team saving the world",
            author: "Marvel Studios"
        },
        {
            id: (0, crypto_1.randomUUID)(),
            name: "Inception",
            description: "A mind-bending sci-fi thriller",
            author: "Christopher Nolan"
        },
        {
            id: (0, crypto_1.randomUUID)(),
            name: "Interstellar",
            description: "Space exploration beyond imagination",
            author: "Christopher Nolan"
        }
    ];
    findAll() {
        return this.profiles;
    }
    findOne(id) {
        return this.profiles.find((profile) => profile.id === id);
    }
    create(createProfileDto) {
        const createProfile = {
            id: (0, crypto_1.randomUUID)(),
            ...createProfileDto,
        };
        this.profiles.push(createProfile);
        return createProfile;
    }
    update(id, updateProfileDto) {
        const matchingProfile = this.profiles.find((existingProfile) => existingProfile.id === id);
        if (!matchingProfile) {
            return {};
        }
        matchingProfile.name = updateProfileDto.name;
        matchingProfile.description = updateProfileDto.description;
        matchingProfile.author = updateProfileDto.author;
        return matchingProfile;
    }
    remove(id) {
        const matchingProfileIndex = this.profiles.findIndex((profile) => profile.id === id);
        if (matchingProfileIndex > -1) {
            this.profiles.slice(matchingProfileIndex, 1);
        }
    }
};
exports.ProfilesService = ProfilesService;
exports.ProfilesService = ProfilesService = __decorate([
    (0, common_1.Injectable)()
], ProfilesService);
//# sourceMappingURL=profiles.service.js.map