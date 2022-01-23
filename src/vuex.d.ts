import { Store } from "vuex";
import { MergedState } from "@/store";

// Type declarations for vuex.
// Extends the component instance to support vuex store "this.$store"
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<MergedState>;
  }
}
