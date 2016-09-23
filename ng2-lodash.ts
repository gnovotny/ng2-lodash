import {NgModule, ModuleWithProviders} from "@angular/core";
import {LodashPipe} from "./src/lodash.pipe";

export * from "./src/lodash.pipe";

@NgModule({
    declarations: [
        LodashPipe
    ],
    exports: [
        LodashPipe
    ]
})
export class LodashModule {
}
