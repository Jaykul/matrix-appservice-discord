/*
Copyright 2017, 2018 matrix-appservice-discord

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import {MockCollectionManager} from "./collection";
import {MockUser} from "./user";
import {MockRole} from "./role";
import * as Discord from "discord.js";

// we are a test file and thus need those
/* tslint:disable:no-unused-expression max-file-line-count no-any */

class MockPresence extends Discord.Presence {
    constructor(user_id: string, guild_id: any) {
      super({} as any, {
            user: {
                id: user_id,
            },
            guild_id: guild_id
        });
    }
}

export class MockMember {
    public id = "";
    public presence: Discord.Presence;
    public user: MockUser;
    public nickname: string;
    public roles = new MockCollectionManager<string, MockRole>();
    constructor(id: string, username: string, public guild: any = null, public displayName: string = username) {
        this.id = id;
        this.presence = new MockPresence(id, guild);
        this.user = new MockUser(this.id, username);
        this.nickname = displayName;
    }
    

    public MockSetPresence(presence: Discord.Presence) {
        this.presence = presence;
    }
}
