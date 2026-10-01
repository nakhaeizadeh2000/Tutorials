"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CmpPost = exports.CmpUser = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
let CmpUser = class CmpUser {
    id;
    email;
    posts;
};
exports.CmpUser = CmpUser;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint" }),
    __metadata("design:type", Number)
], CmpUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], CmpUser.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CmpPost, (p) => p.author),
    __metadata("design:type", Array)
], CmpUser.prototype, "posts", void 0);
exports.CmpUser = CmpUser = __decorate([
    (0, typeorm_1.Entity)({ name: "cmp_users" })
], CmpUser);
let CmpPost = class CmpPost {
    id;
    title;
    author;
};
exports.CmpPost = CmpPost;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint" }),
    __metadata("design:type", Number)
], CmpPost.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CmpPost.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CmpUser, (u) => u.posts, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "authorId" }),
    __metadata("design:type", CmpUser)
], CmpPost.prototype, "author", void 0);
exports.CmpPost = CmpPost = __decorate([
    (0, typeorm_1.Entity)({ name: "cmp_posts" })
], CmpPost);
