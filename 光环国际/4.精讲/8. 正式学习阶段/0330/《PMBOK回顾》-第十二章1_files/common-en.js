var formLang=function(t){function o(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}var n={};return o.m=t,o.c=n,o.p="",o(0)}([function(t,o,n){t.exports=n},function(t,o,n){var r=n(2),a="en",i=navigator.language?navigator.language:navigator.userLanguage;t.exports={lang:r,CURRENT_LANG:a,NAVIGATOR_LANG:i}},function(t,o,n){function r(t){return t&&t.__esModule?t:{"default":t}}o.__esModule=!0;var a=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(3),s=r(i),c={cnamePrefix:"Prefix",cnameFirst:"Given",cnameMiddle:"Middle",cnameLast:"Family",cnameSuffix:"Suffix",cnameNick:"Nickname",gBtnConfirm:"OK",gBtnCancel:"Cancel",gCalendarTypeYMD:"YEAR-MONTH-DAY",gCalendarTypeYM:"YEAR-MONTH",gCalendarTypeMD:"MONTH-DAY",gCalendarTypeY:"YEAR Only",gCalendarTypeM:"MONTH Only",gCalendarTypeD:"DAY Only",gCalendarChooseMonth:"Choose a Month",gCalendarChooseDate:"Choose a Date",gMonth:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],gWeekDay:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],gTimeUnit:["H","m","s"],errOnlyInWeChat:"Please use WeChat to scan the QR code.",errAccessPassword:"Please enter a correct password.",errRequired:"Sorry, it cannot be empty.",errMultiRequired:"Please complete all selections.",errRankRequired:"Please complete the ranking.",errTabularRequired:"Please complete all questions.",errDuplicateData:"Duplicated with existing Submit.",errDuplicateDataFunc:function(t){return"'"+t.data+"' is duplicated with existing Submit."},errOptionInputRequiredFunc:function(t){return"The inputbox after "+t.options+" is required."},errOptionQuotaFullErrFunc:function(t){return"No quota left for "+t.options+"."},errCommodityQuotaFullErrFunc:function(t){return"The "+t.options+" reaches its buyable limit."},errCommodityAmountShortFunc:function(t){return"Total Amount shall be not less than "+t.num+"."},errCommodityAmountOverFunc:function(t){return"Total Amount shall be not more than "+t.num+"."},errCommodityQuantityShortFunc:function(t){return"Total Qty shall be not less than "+t.num+"."},errCommodityQuantityOverFunc:function(t){return"Total Qty shall be not more than "+t.num+"."},errNumberInteger:"Please enter an integer.",errDecimalLength:"The decimal places entered is beyond limit.",errPositiveNumber:"Please enter a non-negative number.",errNumber:"Please enter a number.",errNumberRange:"The number of digits entered is beyond the limit（-9007199254740991 ~ 9007199254740991）",errContentRegFunc:function(t){return"The filled content shall follow the format of "+t.type+"."},errContentReg:"Please follow the format requirement.",errCalendarData:"Please enter a valid date.",errCalendarType:"The date entered mismatches the required format.",errCalendarValid:"The date selected is out of range.",errMobileRequired:"Please enter a mobile number first.",errMobileError:"Please enter a valid mobile number.",errMobileVerificationLimit:"Please wait a while to get another verification code.",errMobileExtResourceUnavailable:"External sources or service is unavailable, please try later.",errMobileAreaUnavailable:"Mobile Number in this area is not supported.",errMobileVCRequired:"Please enter verification code.",errMobileVCError:"Please enter a right one.",errNoTokenShareImage:"Please release the form before share it.",errFMemberCannotLogin:"This account has been registered and cannot repeat registration",errFMemberUnregistered:"Unable to log in due to non-registration",errFMemberAccount:"Please enter a valid account",errFMemberAccountEmpty:"Please fill in your account",errFMemberAuthCode:"Please enter a valid verification code",errFMemberPassword:"Please enter a valid password",errFMemberAuthCodeRequired:"Please enter verification code",errFMemberPasswordRequired:"Please enter password",errFMemberMailNoQuota:"Unable to send the code due to no Email Quota, please contact Customer Service.",errFMemberSmsNoQuota:"Unable to send the code due to no SMS Quota, please contact Customer Service.",errFMemberTemp:"This membership failed to be created, please try again later.",errFMemberInvalidGroup:"You cannot fill in this form for it is for specific members only",errFMemberBalanceDeductionFailed:"Unable to complete payment due to insufficient member Balance",tAccessPassword:"Please enter the visit password.",tUneExitForm:"The accessing object doesn't exist.",tUneExitFormDescribe:"Please check whether it's a right link.",tUpdatingTitle:"Upgrading",tUpdatingDescribe:"The page you visit is not accessible due to system upgrade. Please try later.",tBannedForm:"FORM BANNED",tBannedFormDescribe:"This form has been terminated due to suspected illegal activities reported.",tFrozenForm:"FORM STOPPED",tFrozenFormDescribe:"This form has been suspended due to content violation. You may visit it after the prohibited content has been removed.",tUnPublishForm:"Your form is not released yet",tUnPublishFormDescribe:"Your form is not released yet. Please release the form.",tPauseForm:"The form is being edited.",tPauseFormDescribe:"The form you visit is being edited by its owner and can't be accessed now. Please try later.",tStoppedForm:"Sorry, this form is closed.",tWrongDNSTitle:"Sorry, this form is not available in this area.",tWrongSLDTitle:"Sorry, the domain of this form has been changed.",tWrongSLDDescribe:"You may visit the form using the following domain.",tNotNewestForm:"Sorry, the form has been modified a while ago. Please refresh the page to submit the form.",tNotNewestFormDescribe:"The filled-in content will be auto filled so no data would get lost.",tFormRefresh:"Refresh",tLimitedTitle:"Insufficient Resources to Access the Form",tLimitedSubTitle:'The "Form Load Speed-up" extension package hasn\'t been enabled.',tLimitedDescribe:'Compared to other forms, the forms with the "Form Load Speed-up" extension package enabled will have the priority of being loaded and submitted, and you could fill in and submit the forms successfully even if the system\'s resources are tight. Besides, the package will provide additional network resources for the forms, speeding up the picture/image loading speed in them. ',tLimitedGuide:"If you're not the one who created the form, you may report the situation to him/her. ",tLimitedGuideBuy:function(t){return["Or you may ",s["default"].createElement("span",a({},t.buyLink,{key:"np0"}),"pay for Exclusive Form Visiting Resources"),", to open a separated visiting channel available within 24 hours. "]},tLimitedGuideUser:'If you\'re the one who created the form, click the button below to enable the "Form Load Speed-up" extension package.',tLimitedOpen:"Enable Now",tCDNTitle:"Form Loading Speed-up",tCDNOneDayBtn:"Pay for Exclusive Form Visiting Resources",tCDNOneDayPrice:"Only ¥8.00",tCDNOneDayDes:["When purchased, an exclusive channel will be enabled for you.","You may use this channel to visit and submit the form within 24 hours, no matter whether the resource is insufficient or not."],tGoToPay:"Go Pay",tSupportPayMode:["Alipay","WeChat Pay","China UnionPay"],tFormProtect:"The form is in protected mode",tFormProtectDescribe:"The protected mode is turned on to block abnormal submitting.",tFormProtectGuide:function(t){return["Abnormal submitting is often caused by malicious traffic and votebot, a software program that maliciously automates form submitting. Please use the extension package “",s["default"].createElement("span",a({},t.authCode,{key:"np0"}),"Form Captcha"),"” to fight against fraud Submits."]},tIPLimited:"Submit Failed. Your IP address is a source of abnormal Submits.",tIPLimitedDescribe:"Your IP address is blocked due to rapid access and submit attempts. Please report if you think this is in error.",tIPLimitedDescribeMobile:"Your IP address is blocked due to abnormal access and submitting attempts. Please restart Wi-Fi router or switch to mobile network and try again. Please report the issue to us if the network switching does not work.",tIPLimitedSubmit:"Report",tTitleViewMore:"Know More",tSubmitErrorTitle:"Submit Failed",tSubmitErrorDescribe:"Data error with the accessed form. Please contact the person who created the form.",tSubmitErrorFrontDescribe:"A poor network connection was detected or your IP was blocked from submitting.",tSubmitErrorFrontGuide:"If you still cannot submit after a while, please report the issue to the person who created the form.",tStartCountdown:"It will be opened after",tCountdownTimerFunc:function(t){return""+t.hour+" H "+t.minutes+" M "+t.seconds+" S"},tStartHint:"The form will be open at:",tCollectionNotStarted:"Sorry, the form is not open yet.",tCollectionFinished:"Sorry, the form is closed.",tFormView:"View original form.",tFormViewTIps:"The form can't be submitted under the Preview mode",tCollectionPeriod:"Daily active period",tCollectionFull:"Sorry, the total Submits have reached the upper limit.",tAlreadySubmitted:"Sorry, you've already submitted the Form.",tSubmittedToday:"Sorry, you've already submitted the Form today.",fCaptchaTips:"Please enter the characters you see, case-insensitive. Click the image to refresh.",fCaptchaChangeTips:"Click the image to refresh",sShareBtnTitle:"Share the form via QR code",sShareFormDis:"Scan the QR code to share it with friends",fMemberLogin:"登录",fMemberReg:"注册",fMemberNextStep:"下一步",fMemberAuthPwd:"密码登录",fMemberAuthCode:"验证码登录",fMemberAuthCodeTipsMobile:"已发送验证码，请注意查收短信",fMemberAuthCodeTipsEmail:"已发送验证码，请注意查收邮件",fMemberComponentMember:"会员号",fMemberComponentPassword:"密码",fMemberFinishReg:"填写表单，完善注册信息",fMemberAuthSucceed:function(t){return"恭喜，您已成功注册“"+t.orgName+"”会员"},fMemberUseBalance:"使用会员余额支付",fMemberCurrentBalance:function(t){return"可使用 "+t.balance},asSubmitSucceed:"Submit successfully!",asSubmitSucceedDescribe:"Your feedback has been received. Thanks for your time!",asRandomCode:"Random Code",asFeedbackNumber:"The form has collected N Submits",asStatisticsView:"View Analytics",asFormSubmitView:"View Submit Details",asFormSubmitScoreRight:"Right",asFormSubmitScoreWrong:"Wrong",asFormSubmitScoreAccuracy:"Accuracy",gConfirm:"OK",gGoBack:"Return",gWeChatSetHeadlineDefault:"I shared a form",gPageCurrent:function(t){return"Page "+t.num},gPageAll:function(t){return"Total: "+t.num+" pages"},gPageCurrentAndAll:function(t){return"Page "+t.current+", Total: "+t.total+" pages"},gPrev:"Prev",gNext:"Next",gSubmit:"Submit",gSaving:"Submitting...",gQueue:[function(t){return"The Form is busy, you're in queue..."},function(t){return["Next try in ",s["default"].createElement("span",a({},t.countdownClassName,{key:"np0"}),""+t.countdown)," seconds."]}],gQueueHint:"Do not refresh or close the page, please.",gQueueSaving:"Submitting...",gPoweredBy:"Powered by MikeCRM",gPoweredByWithCompanyFunc:function(t){return"Powered by MikeCRM for "+t.company},gContinueForm:function(t){return"继续填写“"+t.title+"”"},gContinue:"继续填写原表单",gGotoMemberCenter:"返回会员中心",cFileSupportFunc:function(t){return""+t.fileTypes},cFileSizeHint:function(t){return"Choose file（less than "+t.fileSize+"M）"},cReUpload:"Reupload",cRemoveFile:"Remove",cWxAuth:"Autofill",cRefreshWxAuth:"Try again",cQuotaRemainingFunc:function(t){return""+t.remaining+" remains"},cQuotaRemainingFull:"Unavailable",cOptionDefaultTip:"Please select",cOptionLoading:"Loading...",cOptionOtherDefault:"Other",cInputWordLimitFormFunc:function(t){return"At least "+t.num+" character."},cMultiInputInsert:"Add another",cMultiInputRemove:"Delete",cSelectorPlaceholder:"Please select",cOptionNull:"All options have reached their limits.",cOptionsLimitEqualFunc:function(t){return"Please check "+t.num+" options."},cOptionsLimitRangeFunc:function(t){return"Please check "+t.numForm+" - "+t.numTo+" options."},cOptionsMoreThanNumFunc:function(t){return"Please check "+t.numForm+" at least."},cOptionsLessThanNumFunc:function(t){return"No more than "+t.numTo+" options, please."},cNumber:"Number",cPositiveNumber:"Positive Number",cInteger:"Integer",cPositiveInteger:"Positive Integer",cNumberInputHintFunc:function(t){return"Please enter "+t.numType+"."},cNumberValueRangeHintFunc:function(t){return"Please enter a number between "+t.numRangeFrom+" and "+t.numRangeTo+" ."},cNumberValueMoreThanValueFunc:function(t){return"Please enter a number no smaller than "+t.numRangeFrom+" ."},cNumberValueLessThanValueFunc:function(t){return"Please enter a number no larger than "+t.numRangeTo+" ."},cDateTimeHour:"Hour",cDateTimeMin:"Minute",cDateTimeSec:"Second",cFillingPlaceholder:"Please enter",cRankTips:"Please drag and drop the options from the right to the left in the order you wish.",cRankTipsMobile:"Please click options based on priorities.",cCurrencySymbolArray:["¥","$","€","£","JP¥","A$","C$","Fr.","HK$","฿","S$","kr","kr","zł","kr.","₽","Mex$","₩","R","R$","Rs.","RM","Kč","Ft","₪","NZ$","₱","NT$"],cAddressPlaceholder:"Input address here...",cAddressDetailsPlaceholder:"Address Details",cAddressCodePlaceholder:"Postcode",cSignatureBtn:["点击此处","开始签名"],cSignatureEmpty:"清空",cSignatureFinish:"完成",cSignatureReSign:"重签",cMobileGetCode:"Verify Me",cMobileCodeInput:"Verification Code please:",cMobileHasSendCode:function(t){return"Sent("+t.timer+"s)"},cMobileNoQuotaTips:"The mobile number has been verified.",cMobileCodeSucceed:"Verified",cCommodityRemainMaxTips:function(t){return""+t.remain+" remains，max "+t.max+" per order"},cCommodityMaxTips:function(t){return"Max "+t.max+" per order"},cCommodityPayTitle:"Checkout",cCommodityNoPayTitle:"Order Details",cCommodityName:"Product Name",cCommodityQuantity:"Quantity",cCommoditySubTotal:"Sum Price",cCommodityPayTotal:function(t){return["Paying ",s["default"].createElement("span",a({},t.priceClass,{key:"np0"}),""+t.price)]},cCommodityNoPayTotal:function(t){return["Gross Total ",s["default"].createElement("span",a({},t.priceClass,{key:"np0"}),""+t.price)]},cPayOfflineTitle:"Pay offline",cPayOfflineGuide:"The form has been submitted. Please keep your order information.",cPayKnowIt:"Got it",cPayOnlineTitle:"Pay online",cPayOnlineGuide:"The form has been submitted, please finish the payment.",cPayOrderNo:"Order No: ",cPayNeedPay:"Order Amount：",cPayWebPay:"Pay on PC",cPayGoToPay:"Go Pay",cPayAliPayQrCode:"Scan with Alipay App",cPayWxPayQrCode:"Scan with WeChat. The QR code is effective within 24 hours.",cPayChooseOtherMethod:"Pay by other method",cPayAlterOrder:"Back to change order",cPayChooseOtherMethodOrAlterOrder:"Change order or pay by other method",cPaySucceedTips:"Successful!",cPaySucceedDes:function(t){return["Thanks for using MikeCRM Merchant Service. To guarantee a successful and secure payment, ",s["default"].createElement("span",a({},t.strong,{key:"np0"}),"please save the following contact information by capturing the screen or by other methods"),". If you need help with the payment, please directly contact us. Thank you very much!"]},cPaySucceedDetermination:"As a brand leader of information collection and market exploration, MikeCRM complies with the applicable laws and regulations and codes of business principles. We make every effort to keep your data secure and guard your money.",cPayMerchantNo:"Merchant Order ID：",cMerchantPubName:"Merchant Name：",cPayTradeNo:"Payment Transaction ID：",cContactUs:"Contact Us:",cPayFinish:"Complete",gSupportPayMode:["Alipay","WeChat Pay","China UnionPay","Pay Offline"],gPayMethodFrozen:"该商户线上收款资格已被麦客暂时冻结",cPicAttachmentTips:function(t){return"Image formats like .jpg, .png, .gif, .bmp, .psd, .tiff are supported. "+t.resolution},cPicAttachmentTipsWidth:function(t){return"Width ( "+t.value+" ) "},cPicAttachmentTipsHeight:function(t){return"Height ( "+t.value+" )"},cPicAttachmentAddTitle:"Choose Image",cPicAttachmentAddTips:function(t){return"(Less than "+t.max+"MB)"},cPicAttachmentLoadingTitle:"Uploading...",cPicAttachmentReload:"Reupload",cUploadFailedILLEGAL_SUFFIX:"Please choose a file in supported type.",cUploadFailedILLEGAL_FILE_SIZE:"Please choose a file less than {{fileSize}}M.",cUploadFailedILLEGAL_FILE_RESOLUTION:"The resolution is too high.",cFoldText:"Fold",cUnFoldText:"Unfold",cAuthCodeTips:"Please input what you see in the picture. (Case insensitive)",cWechat:"WeChat",cQQ:"Tencent QQ",cWeibo:"Sina Weibo",cSkype:"Skype",cFacebook:"Facebook",cTwitter:"Twitter",cLinkedIn:"LinkedIn",cGooglePlus:"Google+",cNote:"Remark",cWhatsApp:"WhatsApp",cViber:"Viber",cLine:"LINE",cMessenger:"Messenger",cTelegram:"Telegram",cInstagram:"Instagram",ctcfTypeArray:["Single-line","Paragraph","Number","Rating","Currency","Radio","Checkbox","Chained-dropdown","Date/Time","Contacts","ID Card Number for Mainland China","Vehicle Plate Number"],ctcfLocationValid:"The Residential ID locality is not in the allowable range",rErrEncryption:"There is no open Submit data",rErrEncryptionDescribe:"The form doesn't make public its Submit data. Please contact the person who created the form.",rErrGraphEmpty:"There is no statistical diagram displayable.",rToForm:"Visit Form",rTypeArray:["Charts","Details"],rSearchByKey:"Search by keywords",rDataTitleArray:["#","Submit at"],rDataLoading:"Loading...",rDataSelectorOtherOption:"Other",rGraphPercent:"Percentage",rGraphNumber:"Qty",rGraphShowAll:"Show All",rGraphCollapse:"Collapse",rGraphNoData:"No data yet.",rGraphMinRate:"Min",rGraphAvgRate:"Avg",rGraphMaxRate:"Max",rGraphMinNumber:"Min",rGraphMaxNumber:"Max",rGraphTotalNumber:"Sum",rGraphAvgNumber:"Avg",rStatisticsRankTitle:"Rank",rStatisticsRankChosenNum:"Times been chosen",rGraphTotal:function(t){return["Submits：",s["default"].createElement("span",a({},t.totalClass,{key:"np0"}),""+t.total)]},rSigned:"已签名",rUnSign:"未签名",fComponentText:"Text",fComponentSelectSingle:"Radio",fComponentSelectMulti:"Checkbox",fComponentDropDown:"Dropdown",fComponentMultiLevel:"Linkage",fComponentDatetime:"Date/Time",fComponentDate:"Date",fComponentTime:"Time",fComponentNumber:"Number",fComponentAttachment:"File Upload",fComponentRate:"Rating",fComponentTabular:"Tabular",fComponentRank:"Ranking",fComponentCurrency:"Currency",fComponentCity:"City",fComponentCommodity:"Sale",fComponentPicSelectSingle:"Img Radio",fComponentPicSelectMulti:"Img Checkbox",fComponentPicAttachment:"Img Upload",fComponentStaticPic:"Static Img",fComponentStaticText:"Static Text",fComponentSeparator:"Section Break",fComponentPaging:"Page Break",fComponentAuthCode:"Captcha",fComponentStaticMap:"Static Map",fComponentStaticVideo:"Video",fComponentSignature:"Signature",fComponentName:"Name",fComponentAvatar:"Portrait",fComponentEmail:"Email",fComponentCompany:"Organization",fComponentDepartment:"Department",fComponentPosition:"Job Title",fComponentMobile:"Mobile Phone",fComponentWebsite:"Website",fComponentTitle:"Title",fComponentGender:"Gender",fComponentBirthDate:"Birthdate",fComponentLocation:"City",fComponentAddress:"Address",fComponentTelephone:"Landline",fComponentFax:"Fax",fComponentNote:"Remarks",fComponentCategoryIMInfo:"IMs",fComponentWechat:"WeChat",fComponentQQ:"QQ",fComponentSkype:"Skype",fComponentWhatsApp:"WhatsApp",fComponentMessenger:"Messenger",fComponentViber:"Viber",fComponentLine:"LINE",fComponentTelegram:"Telegram",fComponentCategorySNS:"SNS",fComponentWeibo:"Weibo",fComponentLinkedIn:"LinkedIn",fComponentTwitter:"Twitter",fComponentFacebook:"Facebook",fComponentInstagram:"Instagram",fComponentGooglePlus:"Google+",cBtnDefault:"Learn More",preClose:"Close",preSwitchTitle:["Preview Web Effect","Preview Mobile Effect"],succeedTips:"Submitted Successfully!",succeedJumpTips:function(t){return""+t.sec+"s later, you'll be redirected to"},ticketValidationTitle:"Entrance Ticket",ticketValidationGuide:"Please save a screenshot of the ticket",ckiBtn:"Check In",ckiSubTitleDefault:"Welcome to the event",ckiSucceedTitle:"Check-in successful",ckiSucceedDes:"Welcome",ckiSucceedDesWithKey:function(t){return"Welcome, "+t.checkKey+":)"},ckiOpenCpTitle:"Since you hadn't signed up this event, please complement the following questions.",ckiIncompleteTitle:"Configuration not completed yet",ckiIncompleteDes:"Please set up the question for check-in verification",ckiFailedTitle:"Check-in failed",ckiFailedDes:"You did not register the event. The organizer only allow the registered to check in.",ckiDeviceLimitedDes:"Your device has checked in before. As the organizer requires that each device can check in once only, please do not repeat the action.",ckiAuthGuide:"To ease the later check-in by scanning a QR code, it's recommended to authorize Login via WeChat.",ckiAuthNo:"Not Now",ckiAuthYse:"Authorize",ckiClosedTitle:"Check-in is not turned on",ckiClosedSubTitle:"The form creator do not turn on Check-in",ariaRequired:"Required",ariaOptionContentAdd:"Please add contents in choice fields:",ariaInputWordLimitToFunc:function(t){return"Please enter no more than "+t.to+" character(s)."},ariaInputWordLimitFormFunc:function(t){return"Please enter at least "+t.from+" character(s)."},ariaInputWordRange:function(t){return"Please enter at least "+t.from+" and no more than "+t.to+" characters."},ariaMultiLine:"Support for multilines text.",ariaNameStruct:"Please enter the name in separate name fields.",ariaAcceptMultiItem:"Multiple values are allowed. Please separate by (;).",ariaRankTips:"请按顺序点击候选项，对候选项进行排序",ariaRankTipsProcessed:function(t){return"已排序，当前序号为"+t.num},ariaRankTipsWaiting:"待排序",ariaRankTipsFin:function(t){return"已完成排序，当前排序为:"+t.order}};o["default"]=c,t.exports=o["default"]},function(t,o,n){t.exports=n(4)(315)},function(t,o){t.exports=commons}]);