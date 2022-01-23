import { ComponentPublicInstance } from "vue";
import {
  RouteLocationNormalized,
  NavigationGuardNext,
  RouteLocationRaw,
} from "vue-router";

// Type extensions to vue class componenent.
// Support fo the vue-router life cycle hooks
declare type NavigationGuardNextCallback = (vm: ComponentPublicInstance) => any;
export declare type NavigationGuardReturn =
  | void
  | Error
  | RouteLocationRaw
  | boolean
  | NavigationGuardNextCallback;

declare module "vue-class-component" {
  interface ClassComponentHooks {
    beforeRouteEnter?(
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ): NavigationGuardReturn | Promise<NavigationGuardReturn>;

    beforeRouteLeave?(
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ): NavigationGuardReturn;

    beforeRouteUpdate?(
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ): NavigationGuardReturn;
  }
}
