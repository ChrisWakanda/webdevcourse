// CREATED ON 9-20-16 :: N. ANTONOPULOS - DEV ::
// FF-FEED AD
//------------------------------------------
//STEP 1 : CHECK TO MAKE SURE IA VARS ARE LOADED
//STEP 2 : LOAD FEED
//STEP 3A : IF FEED LOADS CHECK ITEMS AGAINST INDIVIDUAL PRODUCT IA VAR SETTINGS
//STEP 3B : IF FEED DOES NOT LOAD RUN DEFUAL LOGIC
//STEP 4A : LOAD IMAGES
//STEP 5 : ADD LISTENERS
//STEP 5 : RUN AD
//------------------------------------------
//// GLOBAL VARS //////
var adW = 320;
var adH = 50;

var products_info = [];
var delayTime = 2.8;
var carousel_speed = 1;

//booleans
var transitioning = false;
var isDefault = false;
var feedReturned = false;
var imagesLoaded = false;
var block_click = false;
var killAutoCar = false;
var useSplash = false;
var feedParams2 = new FTFeedParams();
var creative = {
  //SET UP
  init: function () {
    myFT.addEventListener("instantads", function () {
      creative.lg("instantads are loaded---------");
      creative.createCTA();
      //arr for default images to load

      var ar = [{ ia: myFT.instantAds.logoimage, id: "bb_logo" }];
      ar.push({ ia: myFT.instantAds.frame2_image, id: "greetings" });
      ar.push({ ia: 'BestBuy_FY25_PZN_Template_sidekick_wedge_320x50.png', id: "f1Fold" });
      ar.push({ ia: myFT.instantAds.frame2_image, id: "footer_bg" });
      ar.push({ ia: myFT.instantAds.Frame2_Copy_IMG, id: "f2Image" });
      ar.push({ ia: myFT.instantAds.Frame2_BG, id: "f2BGImage" });

      if (myFT.instantAds.frame3_coremessage_image.indexOf("blank") == -1) {
        ar.push({
          ia: myFT.instantAds.frame3_coremessage_image,
          id: "vpe_hold"
        });
      } else {
        footer_hold.style.display = "none";
      }

      ar.push({ ia: myFT.instantAds.backgroundimage, id: "bg" });

      var feedParams = new FTFeedParams();
      feedParams.segmentId = myFT.instantAds.segmentId; //not sure why? if remove error occur
      feedParams.feedEndPoint = myFT.instantAds.feedEndpoint;
      feedParams.defaultFeedEndpoint = myFT.instantAds.defaultfeedendpoint;
      feedParams2.defaultFeedEndpoint = myFT.instantAds.defaultfeedendpoint;
      var ftFeed = new FTFeed(myFT, feedParams);
      ftFeed.getFeed(creative.feedLoaded, creative.feedLoadError);
creative.lg(ar);
      creative.loadImgs(ar, "none");
      TweenLite.delayedCall(0.05, creative.checkLoads);
      legal_txt.innerHTML = myFT.instantAds.legal_text;
      Frame2_Copy_Text.innerHTML = myFT.instantAds.Frame2_Copy_Text;

      myFT.applyClickTag(openingFrame, 1, myFT.instantAds.frame2_url);
    });
  },
  //FEED LOAD/ERROR
  feedLoaded: function (feedItems, feedUrl) {
    creative.lg("Feed URL: " + feedUrl);
    feedReturned = true;
    if(feedParams2.defaultFeedEndpoint.substring(0,50)==feedUrl.substring(0,50)){
      console.log("defaultFeedEndpoint");
      myFT.tracker("Defaultendpoint",null,"Defaultendpoint");
    }
    var max_number_of_products =  myFT.instantAds.NumberofProducts;

    //check to make sure num of products matches feed length
    var nop =
      feedItems.length < parseInt(max_number_of_products)
        ? feedItems.length
        : parseInt(max_number_of_products);

      var prod_logo_imgURL = myFT.instantAds.product_brand_logo;
      var prod_logo_var = myFT.instantAds.brandlogo_xywh;
      var imgA = [];
      var logoA = [];
      // Prod logo 
      prod_logoDiv = document.createElement('div');
      prod_logoDiv.id = "p_logo_cont";
      prod_logoDiv.className = 'prod_logo'
      container.appendChild(prod_logoDiv);   
        
      if(prod_logo_var) {
          var pvar = prod_logo_var.split('|')[1];
          var prod_logo_var_xyValue = pvar.split(',');
          
          if(prod_logo_var_xyValue[0] == 'auto'){
              p_logo_cont.style.width = prod_logo_var_xyValue[0];
          }else {
              p_logo_cont.style.width = prod_logo_var_xyValue[0] +'px';
          }
          if(prod_logo_var_xyValue[1] == 'auto'){
              p_logo_cont.style.height = prod_logo_var_xyValue[1];
          }else {
              p_logo_cont.style.height = prod_logo_var_xyValue[1] +'px';
          }
      
          var prod_logo_var_xy = prod_logo_var.split('|')[0];
          var prod_logo_var_xyValue = prod_logo_var_xy.split(',');
          if(prod_logo_var_xyValue[0]!='0')p_logo_cont.style.left =prod_logo_var_xyValue[0] +'px';
          if(prod_logo_var_xyValue[1]!='0')p_logo_cont.style.top = prod_logo_var_xyValue[1] +'px';
      }
    for (var i = 0; i < nop; i++) {
      var up1 = i + 1;
      //create slide
      var prod = document.createElement("div");
      prod.id = i;
      prod.className = "prod";
      carousel.appendChild(prod);

      //create slide inner divs
      // prod.innerHTML = "<div class='prod_img_hold'> <img id='p_img_"+i+"' class='prod_img'/></div><div class='prod_info'><div class='prod_desc'></div><div class='prod_price'></div><div id='p_logo_"+i+"' class='prod_logo'></div></div>";
      var prod_img_hold = document.createElement("div");
      // prod_img_hold.className = 'prod_img_hold';
      prod.appendChild(prod_img_hold);
      var p_img = document.createElement("img");
      prod_img_hold.className = "prod_img_hold";
      p_img.id = "p_img_" + i;
      prod_img_hold.appendChild(p_img);

      if (myFT.instantAds.frame3_coremessage_image.indexOf("blank") != -1) {
        prod_img_hold.className = "prod_img_hold_big";
      } else {
        prod_img_hold.className = "prod_img_hold";
      }

      if (myFT.instantAds.product_brand_logo.indexOf("blank") != -1) {
        // prod_img_hold.style.marginTop = "38px";
      }

      //holds price and description
      prod_info = document.createElement("div");
      prod_info.className = "prod_info";
      prod.appendChild(prod_info);
      prod_desc = document.createElement("div");
      prod_desc.className = "prod_desc";
      prod_info.appendChild(prod_desc);
      var prod_price = document.createElement("div");
      prod_price.className = "prod_price";

      prod_info.appendChild(prod_price);
      //BRAND LOGO
      var prod_logo = document.createElement("img");
      prod_logo.id = "p_logo_" + i;
      prod_logo.className = "prod_logo";

      prod_logoDiv.appendChild(prod_logo);
      if (i === 0) {
        prod.style.left = "0px";
        prod_logo.style.opacity = "1";
      }

      if (myFT.instantAds.frame3_coremessage_image.indexOf("blank") == -1) {
        prod_logo.style.top = "-61px";
      }

      //add the item image
      //1 - check to see if override is needed
      var imgURL = feedItems[i].powerfeeds_image;

      imgA.push({ ia: imgURL, id: p_img.id });

      var ct_url = feedItems[i].url;
      var variableUrl = myFT.instantAds.product_frame_url.trim();
      if (variableUrl) {
        ct_url = variableUrl;
      }

      name = feedItems[i].name;

      sepName = creative.textSeperate(name);
      

      prod_desc.innerHTML = sepName;

      // creative.lg('useFeed Shown');

      // creative.lg('ob.longDesc: '+ob.longDesc);

     

      //price 1- check override
      var fp =
        feedItems[i].pricerestriction === null || "null"
          ? feedItems[i].saleprice
          : "SEE PRICE<br>IN CART";
      var is_irc =
        feedItems[i].pricerestriction === null || "null" ? false : true;

      // creative.lg('feed price fp :: ',fp);
      //2 - IF override is 'yes' than salePrice is one to use IF 'no' than use what is defined above
      //fp = (myFT.instantAds["priceRestriction_override_"+up1] === 'yes') ? feedItems[i].saleprice : fp;
      //3 - IF IA var is set to 'useFeed' than use fp else use IA var
      //var price = (myFT.instantAds["product_sale_price_"+up1].indexOf('useFeed') > -1) ? fp : myFT.instantAds["product_sale_price_"+up1]  ;
      var price = fp;
      price = price.toString();
      if (is_irc) {
        //  creative.lg('price :: ',price.split('.'));
        prod_price.innerHTML = "<span class='irc'>" + fp + "</span>";
      } else {
        //if no decimal add it plus 00
        price = price.indexOf(".") > -1 ? price : price + ".00";
        //  creative.lg('price :: ',price.split('.'));
        // prod_price.innerHTML = "<span class='dollarSign'>$</span>" + price.split(".")[0] + "<sup>" + price.split(".")[1] + "</sup>";
        // prod_price.innerHTML = "<span class='dollarSign'>$</span>"+price;
        prod_price.innerHTML = Number(feedItems[i].percentsavings) > 0 ? `<p class='dollarSign'>Save $${feedItems[i].dollarsavings}` : `<p class='dollarSign'>$${feedItems[i].saleprice}</p>`;
      }

      // prod_desc.style.top = "20px";
      // prod_price.style.top = 84+"px";

      if (myFT.instantAds.frame3_coremessage_image.indexOf("blank") != -1) {
        // prod_price.style.top = "164px";
        prod_desc.className = "prod_desc_big";

        cta_hold.style.top = "509px";

        // prod_logo.style.left = '0px';
        // prod_logo.style.top = '0px';
        // prod_logo.style.height = '250px';
      }
      //
      //var prod_logoURL = (myFT.instantAds["product_logo_"+up1].indexOf('blank') > -1) ? prod_logo_imgURL : myFT.instantAds["product_logo_"+up1];
      var prod_logoURL = prod_logo_imgURL;
      logoA.push({ id: prod_logo.id, ia: prod_logoURL });
      products_info.push({ id: i, prod: prod, url: ct_url, p_logo: prod_logo });
      // creative.lg(prod_logoURL)
    }
    var prod_btn = document.createElement("div");
    prod_btn.className = "prod_btn";
    prod_btn.id = "product_btn";
    carousel.appendChild(prod_btn);

    creative.loadImgs(logoA, "none");
    creative.loadImgs(imgA, creative.resizeImgs);
  },

  feedLoadError: function (errorMsg, feedUrl) {
    creative.lg("Feed failed");
    feedReturned = true;
    creative.lg(default_img);
    default_img.style.display = "block";
    default_img.onerror = function () {
      default_img.src = "images/blank.gif";
    };

    bb_logo.style.display = "none"; //for clicktag

    default_img.src = myFT.instantAds.default_fallback_image;
    openingFrame.style.zIndex = "113";
    myFT.applyButton(default_img, creative.onProduct_CT);

    TweenLite.to(container, 0.5, { opacity: 1 });
    myFT.tracker("Feedfail",null,"Feedfail");
  },

  goBanner: function () {
    var useA = false;
    if (products_info.length > 1) {
      useA = true;
      arrow_left.style.display = "block";
      arrow_right.style.display = "block";
      TweenLite.to(p_logo_cont, .5, { opacity: 1, delay: 5.9 });
    }
    else{
        TweenLite.to(p_logo_cont, .5, { opacity: 1, delay: 5.9 });
    }

    if (useA) {
      TweenLite.to(arrow_left, 0.5, { opacity: 1, delay: 5.9 });
      TweenLite.to(arrow_right, 0.5, { opacity: 1, delay: 5.9 });
    }

    var callDelay = 10;
    var tl = new TimelineMax();
    tl.set(f2Image, {x: adW / 4});
    var tl = new TimelineMax();
    tl.set(bb_logo, {x: -1 * adW});
    tl.set(container, { opacity: 1, delay: 0.05 });
    tl.addLabel('start');
    // return;
    tl.to(tagBottom, .3, {x: -4, y: 7, scale: .6, delay: .5}, 'start');
    tl.to([tagTop, tagFlat], .3, {transform: "translate3d(-2px, 2px, 1px)", delay: .5}, 'start');
    tl.to(tagFlat, .3, {opacity: 1}, 'start');

    tl.addLabel('f2');
    tl.to(bb_logo, .5, {x: 0}, 'f2');
    tl.to(logoContainer, .5, {x: -105, y: 23, scale: .22}, 'f2');
    tl.to(f1Fold, .5, {x: adW}, 'f2');
    tl.to([f2BGImage], .5, { opacity: 1}, 'f2');
    if((myFT.instantAds.Frame2_Copy_Text.trim() == '') && (myFT.instantAds.Frame2_Copy_IMG.indexOf('blank') != -1)){
      console.log("skip frame 2");
    } else{
        tl.to(['#f2Image', '#Frame2_Copy_Text'], .5, {x: 0, y: 0, opacity: 1, delay: .1}, 'f2'); 
        tl.to(['#f2Image', '#Frame2_Copy_Text'], .5, {opacity: 0, delay: 2.0}, 'f2');
    }
    
    tl.addLabel('showCarousel');
 
    // tl.to(bb_logo, .5, {x: 0}, 'showCarousel');
    // tl.to(logoContainer, .5, {x: -98, y: 21, scale: .19}, 'showCarousel');
    // tl.to(f1Fold, .5, {x: adW}, 'showCarousel');
    // return;

    tl.from(
      footer_hold,
      0.45,
      { opacity: 0, ease: Sine.easeOut, delay: 0.5 },
      "showCarousel"
    );
    tl.to(
      ["#bb_logo", footer_bg],
      0.45,
      { opacity: 1, ease: Sine.easeOut, delay: 0.5 },
      "showCarousel"
    );
    tl.to(
      "#upperBorder",
      0.45,
      { height: 55, top: 0, ease: Sine.easeOut, delay: 0.1 },
      "showCarousel"
    );
    // if(myFT.instantAds.frame3_coremessage_image.indexOf('blank') == -1) {
    //     tl.to('#upperBorder',0.45,{height:'364px', top:'100px', ease : Sine.easeOut, delay: .1}, 'showCarousel');
    // }else{
    //     tl.to('#upperBorder',0.45,{height:'500px', top:'100px', ease : Sine.easeOut, delay: .1}, 'showCarousel');
    // }

    tl.to(
      cta_hold,
      0.45,
      { y: 0, ease: Sine.easeOut, delay: 0.5 },
      "showCarousel"
    );
    tl.from(
      "#legal_txt",
      0.45,
      { opacity: 0, ease: Sine.easeOut, delay: 0.5 },
      "showCarousel"
    ); //new
    tl.to(
      carousel,
      0.45,
      { left: 118, top: '0px', ease: Sine.easeOut, delay: 0.5 },
      "showCarousel"
    );

    var p_logo = products_info[0].p_logo;
    p_logo.style.opacity = "0";
    tl.to(p_logo, 0.3, { opacity: 1, delay: 2.4 }, "showCarousel");

    if (products_info.length > 1) {
      TweenLite.delayedCall(callDelay, creative.autoCarousel);
    }
  },
  //CAROUSEL ACTIONS
  autoCarousel: function () {
    creative.lg("autoCar");
    if (!killAutoCar) {
      creative.onArrowClick("autoCarousel");
    }
  },
  resetBlock: function () {
    block_click = false;
  },
  

  onArrowClick: function (e) {
    var event_name;
    var newID;
    //creative.lg(e);
    //if called from autoCarousel set event name to arrow_right
    if (e === "autoCarousel") {
      newID = products_info[1].id;
      //   event_name = "arrow_right";
    } else {
      //	alert(e.target.id);
      event_name = e.target.id;
      //	alert(newID);
      newID = e.target.id;
      killAutoCar = true;
    }
    var elm; //element to slide out
    var elm2; //element to slide in

    var ls = adW + "px"; //left slide number
    var rs = -adW + "px"; //right slide number
    if (!block_click && newID != products_info[0].id) {
      var p_logo_1 = products_info[0].p_logo;

      //creative.lg("end Atuo :: ",endAuto.toString()," newID :: ",newID);
      block_click = true;
      //	TweenLite.delayedCall(carousel_speed, creative.resetBlock);
      creative.lg("EVENT NAME IS :: ", event_name);
      if (event_name == "arrow_right") {
        //
        // myFT.tracker("right_arrow_clicked",null,"right_arrow_clicked");
        elm = products_info[0].prod;
        TweenLite.to(elm, carousel_speed, { left: rs });
        elm = products_info.shift();
        products_info.push(elm);
        elm2 = products_info[0].prod;
        elm2.style.left = ls;
        TweenLite.to(elm2, carousel_speed, {
          left: "0px",
          ease: Sine.easeOut,
          // onComplete: creative.resetBlock
        });
      } else {
        //creative.lg(event_name);
        if (event_name === "arrow_right") {
          // myFT.tracker("left_arrow_clicked", null, "left_arrow_clicked");
        }
        elm = products_info[0].prod;
        TweenLite.to(elm, carousel_speed, { left: ls });
        elm2 = products_info.pop();
        elm2.prod.style.left = rs;
        TweenLite.to(elm2.prod, carousel_speed, {
          left: "0px",
          ease: Sine.easeOut,
          // onComplete: creative.resetBlock
        });
        products_info.unshift(elm2);
      }

      // transitioning = true;
      // TweenLite.to('.prod_logo', 0.1, { opacity: 0 });
      // TweenLite.to('.prod_logo', 0.3, { opacity: 1, delay: carousel_speed, onComplete: creative.resetBlock });
      //newAdded
      var p_logo_2 = products_info[0].p_logo;
      TweenLite.to(p_logo_1, 0.1, { opacity: 0 });
      TweenLite.to(p_logo_2, 0.3, { opacity: 1, delay: carousel_speed, onComplete: creative.resetBlock });
      if (!killAutoCar && products_info[0].id != "0") {
        TweenLite.delayedCall(delayTime, creative.autoCarousel);
      }
    }
  },

  //LOAD IMAGES
  loadImgs: function (allImgs, returnFunc) {

    var tmpCnt = 0;
    //creative.lg('retrunFunc is ::  ',retrunFunc);
    creative.lg(allImgs);
    for (var i = 0; i < allImgs.length; i++) {
      //  creative.lg("document.getElementById(allImgs[i].ia :: ",document.getElementById(allImgs[i].id));
      var elm = document.getElementById(allImgs[i].id);
      elm.onerror = function (e) {
        creative.lg("IMAGE LOAD ERROR :: ", this.id);
        if (returnFunc !== "none") {
          e.target.src = "3x2_prod_backup_newBrand.png";
        } else {
          e.target.src = "images/blank.gif";
        }
      };
      elm.onload = function (e) {
        tmpCnt++;

        if (returnFunc !== "none" && tmpCnt === allImgs.length) {
          creative.lg("FEED/PRODUCT IMAGES HAVE LOADED");
          returnFunc(allImgs);
        }
      };
      elm.src = allImgs[i].ia;
    }
  },
  //RESIZE IMAGES
  resizeImgs: function (a) {
    for (var i = 0; i < a.length; i++) {
      // creative.lg('resize ',i);
      var elm = document.getElementById(a[i].id);
      if (elm.clientWidth >= elm.clientHeight) {
        // elm.style.width = "100px";
      } else {
        // elm.style.height = "98px";
      }
      //   if(a[i])
    }
    imagesLoaded = true;
  },
  //CLICK TAGS
  onProduct_CT: function (e) {
    var url = products_info[0].url;
    var id = products_info[0].id + 1;
    myFT.clickTag(id, url);
  },

  //ADD LISTENERS & HELPER FUNCTIONS
  addListeners: function () {
    creative.lg("addListners");
    // if(useSplash){
    //     myFT.applyButton(splash_screen,creative.onCT_7 );

    // }
    // container.appendChild(footer_btn);
    container.appendChild(splash_screen);
    container.appendChild(border);
    //
    myFT.applyButton(cta_bg, creative.onProduct_CT);
    // myFT.applyButton(footer_btn, creative.onProduct_CT);

    myFT.applyButton(product_btn, creative.onProduct_CT);
    myFT.applyButton(container, creative.onProduct_CT);

    myFT.applyButton(arrow_left, creative.onArrowClick);
    container.appendChild(arrow_left);
    myFT.applyButton(arrow_right, creative.onArrowClick);
    container.appendChild(arrow_right);
    //
    creative.goBanner();
  },
  createCTA: function () {
    creative.lg("createCta");
    cta_copy.innerHTML = myFT.instantAds.cta_text;
    // cta_copy.style.color = myFT.instantAds.cta_size_copyColor_backColor.split(',')[1];
    // cta_copy.style.fontSize = myFT.instantAds.cta_size_copyColor_backColor.split(',')[0];
    var w = cta_copy.clientWidth + 32;
    var offset = -0.5;
    if (checkPlatform()[1] == "firefox") {
      offset = -2;
    }

    cta_copy.style.top =
      (cta_bg.clientHeight - cta_copy.clientHeight) / 2 + offset + "px";
    //
    cta_bg.style.width = w + "px";
    // cta_bg.style.backgroundColor = myFT.instantAds.cta_size_copyColor_backColor.split(',')[2];
    cta_copy.style.width = w + "px";
    cta_hold.style.top = "398px";

    if (myFT.instantAds.frame3_coremessage_image.indexOf("blank") != -1) {
      // cta_bg.style.left = '178px';
      // cta_hold.style.top = '194px';
    }
  },
  checkLoads: function () {
    creative.lg("checkLoads");

    if (feedReturned && imagesLoaded) {
      creative.addListeners();
    } else {
      TweenLite.delayedCall(0.05, creative.checkLoads);
    }
  },

  checkMaxChar: function (str) {
    var longDesc = false;
    var cutNum = 45;
    if (prod_desc.clientHeight > 53) {
      longDesc = true;
    }

    if (str.length > cutNum) {
      var rest = str.slice(0, cutNum - 3);

      if (rest.charAt(cutNum - 4) == " ") {
        rest = rest.slice(0, cutNum - 3);
        rest = rest + "...";
      } else {
        rest = rest + "...";
      }
      return { str: rest, longDesc: longDesc };
    } else {
      return { str: str, longDesc: longDesc };
    }
  },

  checkMaxCharResize: function (str) {
    var cutNum2 = 45;

    if (str.length > cutNum2) {
      var rest = str.slice(0, cutNum2);

      if (rest.charAt(cutNum2 - 4) == " ") {
        rest = rest.slice(0, cutNum2 - 3);
        rest = rest + "...";
      } else {
        rest = rest + "...";
      }
      return rest;
    } else {
      return str;
    }
  },

  textSeperate: function (val) {
    var separators = ["|", "/"];
    var result = "";
    flag = true;
    for (var i = 0; i < val.length; i++) {
      flag = true;
      for (var j = 0; j < separators.length; j++) {
        if (val[i] == separators[j]) {
          result += " " + val[i] + " ";
          flag = false;
        }
      }
      if (flag) {
        result += val[i];
      }
    }
    return result;
  },

  fontResize: function (el, longDesc) {
    CSSFontSize = window
      .getComputedStyle(el, null)
      .getPropertyValue("font-size");
    CSSLineHeight = window
      .getComputedStyle(el, null)
      .getPropertyValue("line-height");
    // var currFontSize = (parseInt(CSSFontSize, 10));
    if (longDesc) {
      el.style.fontSize = parseInt(CSSFontSize, 10) - 2 + "px";
      el.style.lineHeight = parseInt(CSSLineHeight, 10) - 1 + "px";

      chkNameResize = creative.checkMaxCharResize(name);
      el.innerHTML = chkNameResize;
    }
  },

  lg: function (msg) {
    if (window.console) {
      // console.log(msg)
    }
  }
};

window.onload = function () {
  creative.lg("window.onload----------");
  document.querySelector('#container').className += " " + checkPlatform()[0] + "-" + checkPlatform()[1];
};
creative.init();

function checkPlatform() {
  try {
    var a = new Array();

    if (navigator.platform.toLowerCase().indexOf("mac") > -1) {
      a[0] = "macOS";
    } else if (navigator.platform.toLowerCase().indexOf("win") > -1) {
      a[0] = "windows";
    } else {
      if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        a[0] = "iOS";
      } else if (navigator.userAgent.match(/Opera Mini/i)) {
        a[0] = "opera";
      } else if (navigator.userAgent.match(/Android/i)) {
        a[0] = "android";
      } else if (navigator.userAgent.match(/BlackBerry/i)) {
        a[0] = "BlackBerry";
      } else if (
        navigator.userAgent.match(/IEMobile/i) ||
        navigator.userAgent.match(/WPDesktop/i)
      ) {
        a[0] = "WindowsPhone";
      }
    }

    var MSIE = window.navigator.userAgent.indexOf("MSIE ");

    var Edge = window.navigator.userAgent.indexOf("Edge/");

    var Trdt = window.navigator.userAgent.indexOf("Trident/");

    if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
      a[1] = "chrome";
    } else if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      a[1] = "firefox";
    } else if (
      navigator.vendor &&
      navigator.vendor.toLowerCase().indexOf("apple") > -1
    ) {
      a[1] = "safari";
    } else if (MSIE > 0 || Edge > 0 || Trdt > 0) {
      a[1] = "IE";
    }

    return a;
  } catch (error) {
    console.error("Error on checkPlatform(): " + error.message);
  }
}
