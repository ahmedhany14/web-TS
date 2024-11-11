import { Model } from "./Model";
import { userProps } from "../interfaces/InterFaces";
import { sync } from "./Sync";
import { Eventing } from "./eveniting";
import { Attributes } from "./attributes";

const URL: string = 'http://localhost:3000/users/';
export class user extends Model<userProps> {
    constructor(attrs: userProps) {
        super(
            new Attributes<userProps>(attrs),
            new Eventing,
            new sync<userProps>(URL)
        );
    }
}