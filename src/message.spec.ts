/* tslint:disable:no-unused-variable */
import { TestBed} from "@angular/core/testing";
import {} from "jasmine";

import {Message} from "./message";

import {
    MessageDataOKMock
} from "./message-data.mock";

describe("Message class test", () => {
        it("should set the cssClass and icon", () => {
            let message = new Message("ok", "test message");
            expect(message.cssClass).toEqual("ok");
        });
    }
);

