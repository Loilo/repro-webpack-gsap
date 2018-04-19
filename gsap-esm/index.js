import TweenLite, { _gsScope, TweenPlugin, Ease, Power0, Power1, Power2, Power3, Power4, Linear } from "./TweenLite";
import TimelineLite from "./TimelineLite";
import TimelineMax from "./TimelineMax";
import CSSPlugin from "./CSSPlugin";
import AttrPlugin from "./AttrPlugin";
import BezierPlugin from "./BezierPlugin";
import { Back, Elastic, Bounce, RoughEase, SlowMo, SteppedEase, Circ, Expo, Sine, ExpoScaleEase } from "./EasePack";
import TweenMax from "./TweenMax";


const _activate = [TweenMax, TimelineLite, TimelineMax, CSSPlugin, AttrPlugin, BezierPlugin, Back, Elastic, Bounce, RoughEase, SlowMo, SteppedEase, Circ, Expo, Sine, ExpoScaleEase]; //forces essential classes to load because most people expect that. Without this, treeshaking could dump them.
export { TweenMax as default };
export { TweenLite, TimelineLite, TimelineMax, CSSPlugin, AttrPlugin, BezierPlugin, TweenPlugin, Ease, Power0, Power1, Power2, Power3, Power4, Linear, Back, Elastic, Bounce, RoughEase, SlowMo, SteppedEase, Circ, Expo, Sine, ExpoScaleEase, _gsScope };
