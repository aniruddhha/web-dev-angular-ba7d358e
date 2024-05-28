import { callUtil } from "./util.js";
import { format } from "date-fns";

console.log(`🥳 Node World 🎊`)

callUtil()

console.log(format(new Date(2014, 1, 11), "yyyy-MM-dd"));
