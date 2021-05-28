function SetLyOut() {

    //Get screen size
    ScrnWdth = document.getElementById("centralcolumn").clientWidth;
    ScrnHght = document.getElementById("centralcolumn").clientHeight;

    //Set layout of header, footer, and 2 squares
    SetScreenPostns();

    //Set layout of Seq Editor
    SeqEdtrSet();

    //Set the 4 smaller UI boxes
    Set4Bxs();

    //Set items on the two UI circles; Static Seq and Phased Seq
    PhseDspBxsSet();

    //set item positions of phase Seq display when image size is changed rotated
    CrntDeg = document.getElementById("phseshftdegN").innerHTML;
    phseseqitmpos(CrntDeg);

    //Set big play button position, and volume, tempo controllers
    SetPlyCntrlUi();

}


function phseseqitmpos(CrntDeg) {

        PhsSqPntxposarr = [];
        PhsSqPntyposarr = [];

        PhsSeqPntRctxposarr = [];
        PhsSeqPntRctyposarr = [];

        for (i = 0; i < 12; i++) {

            j = [9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8];

            RadAngle = (j[i] * 30) + parseInt(CrntDeg);

            //svg sqre
            xpos = (Sqre / 4) + ((((Sqre / 2) - PhseSeqPdng) / 2) - (((Sqre / 2) - PhseSeqPdng) / SeqCrcleSz)) * Math.cos(degrees_to_radians(RadAngle));
            ypos = (Sqre / 4) + ((((Sqre / 2) - PhseSeqPdng) / 2) - (((Sqre / 2) - PhseSeqPdng) / SeqCrcleSz)) * Math.sin(degrees_to_radians(RadAngle));

            PhsSqPntxposarr[i] = xpos;
            PhsSqPntyposarr[i] = ypos;

            PhsSqPntX = "PhsSqPnt".concat(i);
            document.getElementById(PhsSqPntX).setAttribute("cx", "".concat(xpos, "px"));
            document.getElementById(PhsSqPntX).setAttribute("cy", "".concat(ypos, "px"));
            document.getElementById(PhsSqPntX).setAttribute("r", "".concat(((Sqre / 2) / SeqCrcleSz), "px"));


            //svg sqre
            sqrexpos = (Sqre / 4) + ((((Sqre / 2) - SttcSeqPdng) / 2) - (((Sqre / 2) - SttcSeqPdng) / SeqCrcleSz)) * Math.cos(degrees_to_radians(RadAngle));
            sqreypos = (Sqre / 4) + ((((Sqre / 2) - SttcSeqPdng) / 2) - (((Sqre / 2) - SttcSeqPdng) / SeqCrcleSz)) * Math.sin(degrees_to_radians(RadAngle));

            PhsSeqPntRctxposarr[i] = sqrexpos;
            PhsSeqPntRctyposarr[i] = sqreypos;

            PhsSeqPntRctX = "PhsSeqPntRct".concat(i);
            document.getElementById(PhsSeqPntRctX).setAttribute("width", "".concat("".concat((((Sqre / 2) / SeqCrcleSz) * 2), "px")));
            document.getElementById(PhsSeqPntRctX).setAttribute("height", "".concat("".concat((((Sqre / 2) / SeqCrcleSz) * 2), "px")));

            document.getElementById(PhsSeqPntRctX).setAttribute("x", "".concat((sqrexpos - ((Sqre / 2) / SeqCrcleSz)), "px"));
            document.getElementById(PhsSeqPntRctX).setAttribute("y", "".concat((sqreypos - ((Sqre / 2) / SeqCrcleSz)), "px"));
        }



}

function SeqEdtrSet() {
    //Circles Sequencer
    SeqLpPdng = 20;
    SeqCrcleSz = 12;
    CrcleR = ((Sqre - SeqLpPdng) / 2) - ((Sqre - SeqLpPdng) / SeqCrcleSz);
    document.getElementById("circle").setAttribute("r", "".concat(CrcleR, "px"));

    for (i = 0; i < 12; i++) {

        j = [9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8];

        RadAngle = j[i] * 30;
        xpos = (Sqre / 2) + (((Sqre - SeqLpPdng) / 2) - ((Sqre - SeqLpPdng) / SeqCrcleSz)) * Math.cos(degrees_to_radians(RadAngle));
        ypos = (Sqre / 2) + (((Sqre - SeqLpPdng) / 2) - ((Sqre - SeqLpPdng) / SeqCrcleSz)) * Math.sin(degrees_to_radians(RadAngle));

        SeqPntRctX = "SeqPntRct".concat(i);
        document.getElementById(SeqPntRctX).setAttribute("width", "".concat("".concat(((Sqre / SeqCrcleSz) * 2), "px")));
        document.getElementById(SeqPntRctX).setAttribute("height", "".concat("".concat(((Sqre / SeqCrcleSz) * 2), "px")));
        document.getElementById(SeqPntRctX).setAttribute("x", "".concat((xpos - (Sqre / SeqCrcleSz)), "px"));
        document.getElementById(SeqPntRctX).setAttribute("y", "".concat((ypos - (Sqre / SeqCrcleSz)), "px"));

        SeqPntX = "SeqPnt".concat(i);
        document.getElementById(SeqPntX).setAttribute("cx", "".concat(xpos, "px"));
        document.getElementById(SeqPntX).setAttribute("cy", "".concat(ypos, "px"));
        document.getElementById(SeqPntX).setAttribute("r", "".concat((Sqre / SeqCrcleSz), "px"));
    }

    // UI Tone Select Box
    TneBxWdthHght = (Sqre / SeqCrcleSz) * 2;
    TneBxLPos = (Sqre / 2) - (TneBxWdthHght / 2);
    TneBxTPos = (Sqre / 2) - (TneBxWdthHght / 2);
    //
    document.getElementById("TneBx").style.width = "".concat(TneBxWdthHght, "px");
    document.getElementById("TneBx").style.height = "".concat(TneBxWdthHght, "px");
    document.getElementById("TneBx").style.left = "".concat(TneBxLPos, "px");
    document.getElementById("TneBx").style.top = "".concat(TneBxTPos, "px");

    //UI box margin
    FrdBckBtnMrg = 5;

    // UI Tone Select Back Button
    document.getElementById("TneBxBck").style.width = "".concat((TneBxWdthHght / 3), "px");
    document.getElementById("TneBxBck").style.height = "".concat(TneBxWdthHght, "px");
    document.getElementById("TneBxBck").style.left = "".concat((TneBxLPos - (TneBxWdthHght / 3) - FrdBckBtnMrg), "px");
    document.getElementById("TneBxBck").style.top = "".concat(TneBxTPos, "px");

    document.getElementById("TneBxBckVec").setAttribute("width", "100%");
    document.getElementById("TneBxBckVec").setAttribute("height", "100%");

    // UI Tone Select Forward Button
    document.getElementById("TneBxFrd").style.width = "".concat((TneBxWdthHght / 3), "px");
    document.getElementById("TneBxFrd").style.height = "".concat(TneBxWdthHght, "px");
    document.getElementById("TneBxFrd").style.left = "".concat(((TneBxLPos + TneBxWdthHght) + FrdBckBtnMrg), "px");
    document.getElementById("TneBxFrd").style.top = "".concat(TneBxTPos, "px");

    document.getElementById("TneBxFrdVec").setAttribute("width", "100%");
    document.getElementById("TneBxFrdVec").setAttribute("height", "100%");

    document.getElementById("TwtrShreBtn").style.width = "20px";
    document.getElementById("TwtrShreBtn").style.height = "20px";
    document.getElementById("TwtrShreBtn").style.left = "".concat(TneBxLPos, "px");
    document.getElementById("TwtrShreBtn").style.top = "".concat((TneBxTPos + TneBxWdthHght), "px");

}

function Set4Bxs() {
    for (i = 0; i < 4; i++) {
        document.getElementsByClassName("DspQrtrs")[i].style.width = "".concat((Sqre / 2), "px");
        document.getElementsByClassName("DspQrtrs")[i].style.height = "".concat((Sqre / 2), "px");
    }

    // Phased Seq box
    document.getElementById("PhseSeqBx").style.left = "".concat((Sqre / 2), "px");
    document.getElementById("PhseSeqBx").style.top = "".concat(0, "px");
    // Static Seq box
    document.getElementById("StatSeqBx").style.left = "".concat(0, "px");
    document.getElementById("StatSeqBx").style.top = "".concat(0, "px");
    // UI box
    document.getElementById("TmpoDspBx").style.left = "".concat(0, "px");
    document.getElementById("TmpoDspBx").style.top = "".concat((Sqre / 2), "px");
    // Play btn box
    document.getElementById("PlaySeqBx").style.left = "".concat((Sqre / 2), "px");
    document.getElementById("PlaySeqBx").style.top = "".concat((Sqre / 2), "px");

}

function PhseDspBxsSet() {
    //Static Seq Circle
    SttcSeqPdng = 10;
    SeqCrcleSz = 12;
    SttCrcleR = (((Sqre / 2) - SttcSeqPdng) / 2) - (((Sqre / 2) - SttcSeqPdng) / SeqCrcleSz);
    document.getElementById("SttSqCrcl").setAttribute("r", "".concat(SttCrcleR, "px"));

    //Static Seq item positioning
    for (i = 0; i < 12; i++) {

        j = [9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8];
        RadAngle = j[i] * 30;
        xpos = (Sqre / 4) + ((((Sqre / 2) - SttcSeqPdng) / 2) - (((Sqre / 2) - SttcSeqPdng) / SeqCrcleSz)) * Math.cos(degrees_to_radians(RadAngle));
        ypos = (Sqre / 4) + ((((Sqre / 2) - SttcSeqPdng) / 2) - (((Sqre / 2) - SttcSeqPdng) / SeqCrcleSz)) * Math.sin(degrees_to_radians(RadAngle));

        StcSqPntX = "StcSqPnt".concat(i);
        document.getElementById(StcSqPntX).setAttribute("cx", "".concat(xpos, "px"));
        document.getElementById(StcSqPntX).setAttribute("cy", "".concat(ypos, "px"));
        document.getElementById(StcSqPntX).setAttribute("r", "".concat(((Sqre / 2) / SeqCrcleSz), "px"));
    }


    //Phase Seq Circle
    PhseSeqPdng = 10;
    SeqCrcleSz = 12;
    PhsCrcleR = (((Sqre / 2) - PhseSeqPdng) / 2) - (((Sqre / 2) - PhseSeqPdng) / SeqCrcleSz);
    document.getElementById("PhsSqCrcl").setAttribute("r", "".concat(PhsCrcleR, "px"));

    //Phased Seq item positioning
    for (i = 0; i < 12; i++) {

        j = [9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8];
        RadAngle = j[i] * 30;
        xpos = (Sqre / 4) + ((((Sqre / 2) - SttcSeqPdng) / 2) - (((Sqre / 2) - SttcSeqPdng) / SeqCrcleSz)) * Math.cos(degrees_to_radians(RadAngle));
        ypos = (Sqre / 4) + ((((Sqre / 2) - SttcSeqPdng) / 2) - (((Sqre / 2) - SttcSeqPdng) / SeqCrcleSz)) * Math.sin(degrees_to_radians(RadAngle));

        StcSeqPntRctX = "StcSeqPntRct".concat(i);
        document.getElementById(StcSeqPntRctX).setAttribute("width", "".concat("".concat((((Sqre / 2) / SeqCrcleSz) * 2), "px")));
        document.getElementById(StcSeqPntRctX).setAttribute("height", "".concat("".concat((((Sqre / 2) / SeqCrcleSz) * 2), "px")));
        document.getElementById(StcSeqPntRctX).setAttribute("x", "".concat((xpos - ((Sqre / 2) / SeqCrcleSz)), "px"));
        document.getElementById(StcSeqPntRctX).setAttribute("y", "".concat((ypos - ((Sqre / 2) / SeqCrcleSz)), "px"));
    }

    //Box and triangle positioning for Phased Seq phase control UI

    //Static Seq box
    document.getElementById("phsestatbx").style.width = "".concat((Sqre / 8), "px");
    document.getElementById("phsestatbx").style.height = "".concat((Sqre / 8), "px");
    document.getElementById("phsestatbx").style.left = "".concat((Sqre / 4) - ((Sqre / 8) / 2), "px");
    document.getElementById("phsestatbx").style.top = "".concat((Sqre / 4) - ((Sqre / 8) / 2), "px");

    //Phase Seq box
    document.getElementById("phseshftbx").style.width = "".concat((Sqre / 8), "px");
    document.getElementById("phseshftbx").style.height = "".concat((Sqre / 8), "px");
    document.getElementById("phseshftbx").style.left = "".concat((Sqre / 4) - ((Sqre / 8) / 2), "px");
    document.getElementById("phseshftbx").style.top = "".concat((Sqre / 4) - ((Sqre / 8) / 2), "px");

    //Clockwise phase adjust triangle
    document.getElementById("phseshftclkwse").style.width = "".concat(((Sqre / 8) / 3), "px");
    document.getElementById("phseshftclkwse").style.height = "".concat((Sqre / 8), "px");
    document.getElementById("phseshftclkwse").style.left = "".concat((Sqre / 4) - ((Sqre / 8) / 2) + (Sqre / 8) + (Sqre / 96), "px");
    document.getElementById("phseshftclkwse").style.top = "".concat((Sqre / 4) - ((Sqre / 8) / 2), "px");
    //Anticlockwise phase adjust triangle
    document.getElementById("phseshftantclkwse").style.width = "".concat(((Sqre / 8) / 3), "px");
    document.getElementById("phseshftantclkwse").style.height = "".concat((Sqre / 8), "px");
    document.getElementById("phseshftantclkwse").style.left = "".concat((Sqre / 4) - ((Sqre / 8) / 2) - ((Sqre / 8) / 3) - (Sqre / 96), "px");
    document.getElementById("phseshftantclkwse").style.top = "".concat((Sqre / 4) - ((Sqre / 8) / 2), "px");

    //Phase degree text positioning
    document.getElementById("phseshftdegbx").style.width = "".concat((Sqre / 8), "px");
    document.getElementById("phseshftdegbx").style.height = "".concat(((Sqre / 8) / 3), "px");
    document.getElementById("phseshftdegbx").style.left = "".concat((Sqre / 4) - ((Sqre / 8) / 2), "px");
    document.getElementById("phseshftdegbx").style.top = "".concat((Sqre / 4) + ((Sqre / 8) / 2) + (Sqre / 96), "px");
    document.getElementById("phseshftdegtx").style.fontSize = "".concat(((Sqre / 8) / 3), "px");

    //Phased Seq degree display text positioning
    document.getElementById("phsestatdegtx").style.fontSize = "".concat(((Sqre / 8) / 3), "px");
    document.getElementById("phsestatdegbx").style.width = "".concat((Sqre / 8), "px");
    document.getElementById("phsestatdegbx").style.height = "".concat(((Sqre / 8) / 3), "px");
    document.getElementById("phsestatdegbx").style.left = "".concat((Sqre / 4) - ((Sqre / 8) / 2), "px");
    document.getElementById("phsestatdegbx").style.top = "".concat((Sqre / 4) + ((Sqre / 8) / 2) + (Sqre / 96), "px");

}

function SetPlyCntrlUi() {
    //Phase Display Box Contents
    PhseDspBxWdthHght = (Sqre / 8);
    PhseDspBxLPos = (PhseDspBxWdthHght - (PhseDspBxWdthHght / 2));
    PhseDspBxTPos = (Sqre / 2) + (((Sqre / 8) * 3) - (Sqre / 32));

    //SeqPlyBx
    SeqPlyBxLPos = (Sqre / 4) - (Sqre / 6);
    SeqPlyBxTPos = (Sqre / 4) - ((Sqre / 16) * 3);
    SeqDspBxWdthHght = (Sqre / 3);

    document.getElementById("SeqPlyBx").style.width = "".concat(SeqDspBxWdthHght, "px");
    document.getElementById("SeqPlyBx").style.height = "".concat(SeqDspBxWdthHght, "px");
    document.getElementById("SeqPlyBx").style.left = "".concat(SeqPlyBxLPos, "px");
    document.getElementById("SeqPlyBx").style.top = "".concat(SeqPlyBxTPos, "px");


    playuitxthght = (SeqDspBxWdthHght / 4);


    document.getElementById("uibox1").style.width = "".concat((Sqre / 3.5), "px");
    document.getElementById("uibox1").style.height = "".concat(playuitxthght, "px");
    document.getElementById("uibox1").style.left = "".concat(PhseDspBxLPos + (playuitxthght + (playuitxthght/2)), "px");
    document.getElementById("uibox1").style.top = "".concat(SeqPlyBxTPos, "px");

    document.getElementById("uibox1ico").style.width = "".concat(playuitxthght, "px");
    document.getElementById("uibox1ico").style.height = "".concat(playuitxthght, "px");
    document.getElementById("uibox1ico").style.left = "".concat(PhseDspBxLPos, "px");
    document.getElementById("uibox1ico").style.top = "".concat(SeqPlyBxTPos, "px");

    document.getElementById("uibox2").style.width = "".concat((Sqre / 3.5), "px");
    document.getElementById("uibox2").style.height = "".concat(playuitxthght, "px");
    document.getElementById("uibox2").style.left = "".concat(PhseDspBxLPos + (playuitxthght + (playuitxthght/2)), "px");
    document.getElementById("uibox2").style.top = "".concat(SeqPlyBxTPos + (playuitxthght + (playuitxthght / 2)), "px");

    document.getElementById("uibox2ico").style.width = "".concat(playuitxthght, "px");
    document.getElementById("uibox2ico").style.height = "".concat(playuitxthght, "px");
    document.getElementById("uibox2ico").style.left = "".concat(PhseDspBxLPos, "px");
    document.getElementById("uibox2ico").style.top = "".concat(SeqPlyBxTPos + (playuitxthght + (playuitxthght / 2)), "px");

    document.getElementById("uibox3").style.width = "".concat((Sqre / 4.5), "px");
    document.getElementById("uibox3").style.height = "".concat(playuitxthght, "px");
    document.getElementById("uibox3").style.left = "".concat(PhseDspBxLPos + (playuitxthght + (playuitxthght/2)), "px");
    document.getElementById("uibox3").style.top = "".concat(SeqPlyBxTPos + (playuitxthght * 3), "px");

    document.getElementById("uibox3ico").style.width = "".concat(playuitxthght, "px");
    document.getElementById("uibox3ico").style.height = "".concat(playuitxthght, "px");
    document.getElementById("uibox3ico").style.left = "".concat(PhseDspBxLPos, "px");
    document.getElementById("uibox3ico").style.top = "".concat(SeqPlyBxTPos + (playuitxthght * 3), "px");

}



function degrees_to_radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi/180);
//console.log(degrees * (pi/180));
}

var SmplIco = ["m 31.978013,67.679715 c -3.348553,-1.476525 -3.041494,-5.552204 -3.037101,-8.629444 -1.460858,2.770875 -3.276903,6.480579 -6.954519,6.193407 -3.471673,-0.515363 -5.605947,-4.531634 -3.665939,-7.593717 0.56327,-1.191738 2.039954,-4.235394 -0.311004,-2.020184 -2.328142,2.500334 -6.917517,3.37143 -8.889568,-0.03386 -2.4342189,-3.31458 1.170723,-6.566863 3.414017,-8.727337 C 10.477124,46.590148 6.1368293,48.711533 4.0794358,45.813445 1.6248561,42.973415 3.3572172,38.523784 6.8756203,37.635112 7.3408046,37.193501 11.023746,36.705145 9.80941,36.412627 6.9210339,35.863559 3.0064818,35.365901 2.2543727,31.919358 1.3082055,28.219542 5.1314536,24.934317 8.690603,25.976945 c 1.704205,0.248902 3.957271,0.2137 1.200972,-1.097104 -3.2359916,-1.4424 -5.1814122,-5.864974 -2.2495168,-8.607971 2.6959358,-3.077869 6.3890148,-0.608293 9.1450928,0.869411 -0.195653,-1.84056 -3.861927,-5.34965 -1.823213,-8.084702 1.716849,-3.298959 6.685724,-3.54642 8.62061,-0.338797 0.817186,0.947126 2.610045,4.209346 2.043732,0.905393 -0.778116,-3.248554 0.50108,-7.720442 4.530816,-7.6007916 3.736313,-0.344014 5.246733,3.7711276 5.643696,6.7970206 0.120151,2.206153 0.551216,0.200895 0.912639,-0.861034 0.686909,-2.727786 2.652545,-6.2255234 5.988265,-5.4647793 3.907366,0.3440148 5.020317,4.8478573 3.817389,8.0101993 -0.921168,3.963018 1.791409,-1.288512 3.409094,-1.839471 3.050619,-2.481787 8.022937,0.217461 7.660806,4.069784 0.377338,2.120622 -3.73263,5.42612 -2.391295,5.800554 2.835609,-1.844703 7.684357,-2.961971 9.372001,0.949069 1.912567,3.22057 -1.065464,6.444856 -3.946698,7.625992 -1.311245,0.651161 -2.129521,1.170796 -0.128333,0.938175 2.811433,-0.116041 6.558295,0.03095 7.50334,3.305087 1.634606,3.831926 -2.469236,6.938345 -6.006959,6.823514 -4.482124,0.47363 3.163162,1.802004 3.83449,3.767692 2.531336,3.183279 -0.954673,8.669416 -4.960828,7.517201 -1.413064,-0.08304 -6.201951,-2.368292 -3.419343,0.231588 2.765995,2.023008 4.241015,6.299213 1.073757,8.708006 -2.814085,2.548529 -6.386691,0.287433 -8.540209,-1.930813 -1.971284,-1.372392 0.631373,2.832277 0.532203,4.125047 0.776161,4.33079 -5.567233,7.59009 -8.379256,3.945698 -1.282959,-1.516175 -1.955581,-3.409992 -2.817704,-5.172757 -0.307515,2.875912 -0.122294,6.47518 -2.932967,8.160226 -1.367583,0.550329 -3.012759,0.690897 -4.405171,0.151333 z m 5.308012,-14.021899 c 2.054142,-1.234845 4.345747,0.481449 5.938573,0.868105 0.150157,-3.436449 4.054443,-5.827178 7.236292,-4.640164 -0.338911,-2.426812 -0.338637,-5.333954 2.159825,-6.660753 1.776292,-0.853398 3.567294,-0.6451 1.563721,-2.613127 -1.678118,-2.697859 0.785812,-5.499731 1.784378,-7.420925 -3.256217,-1.494262 -3.481635,-5.688702 -2.203601,-8.295856 -3.519398,-0.04068 -5.825453,-3.485848 -5.510817,-6.77475 -2.942555,1.130628 -6.824297,-0.239729 -7.661824,-3.559061 -0.868896,-1.058283 -3.103899,2.52561 -5.031423,1.49201 -2.597882,0.268706 -4.196452,-4.256387 -5.272398,-0.244282 -1.620919,2.21887 -4.790932,2.470205 -7.053452,1.149718 0.458466,3.331168 -2.418497,6.8138 -5.894011,6.325891 -0.676352,0.847834 1.568919,4.200624 -0.213577,5.796861 -0.855925,2.023873 -4.660989,2.390116 -1.626673,4.375241 1.627873,2.322273 0.778716,5.414085 -1.166188,7.244704 3.445586,0.386249 5.792094,4.423754 4.331347,7.596564 2.435179,0.0047 6.069117,0.895263 6.618014,4.081142 -0.08899,3.655398 3.95767,-1.354484 6.078326,0.988463 1.72295,-0.0795 2.37886,4.214403 3.559435,2.046218 0.622912,-0.769799 1.462469,-1.35727 2.364053,-1.755999 z",

"m 32.838371,62.220118 c -1.715684,-0.359469 -3.213483,-1.976326 -3.548135,-3.830173 -0.05401,-0.299175 -0.122382,-0.586839 -0.151946,-0.639252 -0.02956,-0.05241 -0.424684,0.274027 -0.878045,0.725424 -0.45336,0.451397 -1.147173,0.97679 -1.541806,1.16754 -0.934077,0.451497 -2.364605,0.547595 -3.324448,0.223326 -2.223779,-0.751273 -3.753202,-3.223156 -3.363415,-5.436015 0.0844,-0.479146 0.134593,-0.890036 0.111541,-0.913089 -0.02305,-0.02305 -0.393235,0.09701 -0.822627,0.266812 -1.145629,0.453028 -2.952748,0.44665 -3.977873,-0.01403 -0.883787,-0.397175 -1.847167,-1.399687 -2.388003,-2.485004 -0.69192,-1.388509 -0.434955,-3.135481 0.691916,-4.704004 0.284027,-0.395345 0.516412,-0.74812 0.516412,-0.783944 0,-0.03583 -0.52028,-0.06399 -1.156178,-0.0626 -1.577671,0.0035 -2.459578,-0.307593 -3.2869114,-1.159337 -1.0778831,-1.109684 -1.3688021,-1.842576 -1.3686184,-3.44786 1.398e-4,-1.222122 0.043612,-1.449123 0.4198544,-2.192373 0.4284331,-0.846351 1.5025834,-1.981401 2.1574664,-2.279786 0.200382,-0.0913 0.363659,-0.204067 0.362837,-0.250593 -8.18e-4,-0.04653 -0.392783,-0.26668 -0.871025,-0.489233 C 9.3314109,35.40964 8.5026287,34.591323 8.0165962,33.543495 7.7087249,32.879762 7.6411135,32.525113 7.6432165,31.584975 7.6464092,30.157757 8.0877613,29.138425 9.1209907,28.171961 9.9564453,27.390491 10.659985,27.015783 11.743886,26.775 l 0.810756,-0.180105 -0.626317,-0.91483 c -1.045945,-1.52776 -1.310728,-2.98438 -0.821356,-4.518441 0.361798,-1.134151 1.960006,-2.736803 3.045144,-3.053611 1.177494,-0.343771 1.612192,-0.310235 3.693935,0.284979 0.310702,0.08884 0.310489,0.08597 -0.0611,-0.821582 -0.536446,-1.3102 -0.52384,-2.513475 0.03712,-3.542654 1.099711,-2.01763 3.147054,-3.074907 5.286998,-2.730279 0.973519,0.156781 2.021728,0.649839 2.522244,1.186418 0.191344,0.205129 0.390054,0.372962 0.44158,0.372962 0.05153,0 0.172272,-0.426511 0.268323,-0.947803 0.241337,-1.309786 0.669473,-2.1531669 1.534368,-3.0225392 0.54713,-0.5499621 0.935284,-0.8002018 1.50249,-0.9686441 0.993194,-0.294947 2.486357,-0.2894966 3.377802,0.01233 0.930882,0.3151785 2.171304,1.5661575 2.651004,2.6735633 0.193734,0.447241 0.384531,0.814115 0.423995,0.815275 0.03946,0.0012 0.258011,-0.354357 0.485662,-0.790036 0.544997,-1.0430175 1.738659,-2.1261807 2.692053,-2.4428475 1.730481,-0.5747738 4.086908,0.1470782 5.175377,1.5853909 0.641155,0.8472276 0.994479,1.8170936 1.107681,3.0405576 l 0.08216,0.888016 0.857003,-0.564521 c 1.169941,-0.770657 1.633895,-0.89788 2.999648,-0.822552 1.383151,0.07629 2.277287,0.470559 3.239038,1.42826 0.9411,0.937137 1.296149,1.814118 1.297711,3.20538 0.0011,0.978153 -0.06213,1.28208 -0.427317,2.054018 -0.404815,0.855702 -0.411947,0.900708 -0.128487,0.810741 1.207306,-0.383184 3.158719,-0.285066 4.111468,0.206727 1.121437,0.578869 2.160163,2.080323 2.484075,3.590671 0.289015,1.347628 -0.55784,3.393988 -1.842912,4.453253 l -0.509283,0.419794 0.417156,0.0853 c 1.675369,0.342588 2.923275,0.983613 3.504871,1.80039 1.051581,1.476809 1.311489,3.481012 0.629023,4.850543 -0.521924,1.047365 -1.467068,1.935068 -2.719122,2.553866 -0.588153,0.290681 -1.06937,0.549666 -1.06937,0.575523 0,0.02586 0.246567,0.1728 0.547924,0.326542 0.655566,0.334444 1.469518,1.20445 1.919563,2.051757 0.492982,0.928146 0.47217,2.758042 -0.04373,3.845167 -0.499479,1.052511 -1.362664,1.996402 -2.300999,2.516135 -0.703807,0.38983 -0.883557,0.425243 -2.134771,0.420571 l -1.366256,-0.0051 0.498361,0.937871 c 0.432605,0.814125 0.506229,1.101709 0.558002,2.17961 0.0525,1.093061 0.01713,1.333611 -0.295369,2.00904 -0.419688,0.90709 -1.501302,2.012406 -2.405309,2.458018 -0.522072,0.257351 -0.893172,0.318326 -1.937298,0.318326 -1.172757,0 -1.376111,-0.04289 -2.211339,-0.466384 -0.505897,-0.256511 -0.925643,-0.466384 -0.932768,-0.466384 -0.0071,0 -0.01296,0.629619 -0.01296,1.399152 0,1.282692 -0.03543,1.463122 -0.425673,2.167669 -0.521378,0.941306 -1.467299,1.804235 -2.516135,2.295382 -0.651111,0.304902 -1.002776,0.37017 -2.009039,0.37287 -1.770152,0.0047 -2.639291,-0.490182 -3.848007,-2.191248 l -0.440561,-0.620017 -0.164912,0.620017 c -0.442128,1.662265 -1.571874,3.051653 -2.829926,3.480315 -0.838854,0.285826 -2.235224,0.388351 -3.027735,0.222304 z m 1.986403,-12.230907 c 0.30047,-0.256511 0.92421,-0.659285 1.386088,-0.895052 1.056651,-0.539371 2.267976,-0.574127 3.556192,-0.102037 0.46798,0.171499 0.863644,0.296491 0.879253,0.277758 0.01561,-0.01873 0.169918,-0.314657 0.34291,-0.657609 0.73369,-1.45452 2.607756,-2.699446 4.293795,-2.852329 l 0.841541,-0.07631 0.07585,-1.106685 c 0.133667,-1.950161 0.97284,-3.21682 2.635449,-3.977987 l 0.748593,-0.342718 -0.341052,-0.600433 c -0.736224,-1.296143 -0.54293,-2.979123 0.563663,-4.90772 l 0.490563,-0.854966 -0.624534,-0.694631 c -0.969187,-1.077969 -1.270699,-2.007236 -1.278897,-3.941598 l -0.0068,-1.610566 -0.756393,-0.37693 C 46.225114,26.568825 45.10317,25.122654 44.678672,23.463926 44.484989,22.707114 44.471207,22.692349 43.994635,22.731082 42.193384,22.877478 39.713975,21.60481 38.916883,20.1247 l -0.265202,-0.49245 -0.72877,0.476472 c -1.108973,0.725048 -1.75004,0.866732 -2.950743,0.652155 -0.723732,-0.129338 -1.244973,-0.336539 -1.881406,-0.747885 -0.484179,-0.312941 -0.91028,-0.539029 -0.946891,-0.502418 -0.03661,0.03661 -0.180878,0.282141 -0.320595,0.545624 -0.330705,0.623652 -1.477547,1.493137 -2.355695,1.785985 -0.615541,0.205271 -2.414607,0.314103 -2.943079,0.178035 -0.120374,-0.03099 -0.26109,0.167789 -0.370991,0.524079 -0.607644,1.969944 -2.046544,3.424457 -3.79967,3.840899 -0.63903,0.151797 -0.733467,0.21756 -0.66635,0.464026 0.34118,1.252865 0.386406,2.084601 0.156377,2.875873 -0.198848,0.684015 -0.408578,0.98629 -1.309222,1.886934 l -1.072442,1.072443 0.419295,0.477551 c 1.152954,1.313143 1.179074,3.847196 0.06004,5.824495 -0.0258,0.04559 0.100052,0.150888 0.279681,0.233986 0.753917,0.348768 1.693137,1.371722 2.198765,2.394791 0.417803,0.845366 0.525874,1.24409 0.571162,2.107293 l 0.05586,1.064646 0.544191,0.09506 c 1.068731,0.186692 2.184181,0.712856 2.926923,1.380645 0.714704,0.64258 1.415605,1.81001 1.418691,2.362992 0.0018,0.32406 0.188338,0.31629 1.146099,-0.04773 1.236403,-0.469928 2.108597,-0.426719 3.242307,0.160624 0.649689,0.336586 1.094663,0.689669 1.393389,1.105636 0.241385,0.336122 0.466101,0.611131 0.499371,0.611131 0.03327,0 0.306327,-0.209873 0.606798,-0.466384 z"];

function loadfunc() {
//console.log("load func");
    RtateStat = "off";
    PhsItmAnglPos = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

    PhseDspShftPos = [50, -50];
    PhseDspShftDst = [50, -50];
    PhseDspShftShft = [0, 0];
    document.getElementById("PhsePosCrclA").setAttribute("cx", "".concat(PhseDspShftPos[0], "%"));
    document.getElementById("PhsePosCrclB").setAttribute("cx", "".concat(PhseDspShftPos[1], "%"));


    NtePltte = ["e4", "e5", "f#4", "f#5", "b4", "b5", "c#4", "c#5", "d4", "d5"];
    NtePltteSq = {e4: 0, e5: 1, 'f#4': 2, 'f#5': 3, b4: 4, b5: 5, 'c#4': 6, 'c#5': 7, d4: 8, d5: 9,};
    NtePltteOctv = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
    NteClrs = {e4: "#d35400", e5: "#d35400", 'f#4': "#e74c3c", 'f#5': "#e74c3c", b4: "#8e44ad", b5: "#8e44ad", 'c#4': "#34495e", 'c#5': "#34495e", d4: "#1abc9c", d5: "#1abc9c",};

    SeqNotes = {1: NtePltte[0], 2: NtePltte[2], 3: NtePltte[4], 4: NtePltte[7], 5: NtePltte[9], 6: NtePltte[2], 7: NtePltte[0], 8: NtePltte[7], 9: NtePltte[4], 10: NtePltte[2], 11: NtePltte[9], 12: NtePltte[7],};
    //SeqSmpleArr = ["#d35400", "#e74c3c", "#8e44ad", "#34495e", "#1abc9c"];
    SeqNotesOctv = {1: NtePltteOctv[0], 2: NtePltteOctv[2], 3: NtePltteOctv[4], 4: NtePltteOctv[7], 5: NtePltteOctv[9], 6: NtePltteOctv[2], 7: NtePltteOctv[0], 8: NtePltteOctv[7], 9: NtePltteOctv[4], 10: NtePltteOctv[2], 11: NtePltteOctv[9], 12: NtePltteOctv[7],};

    //console.log(SeqNotes[1]);
    //console.log(NteClrs[SeqNotes[1]]);
    //SeqNotes[1] //NtePltteSq[SeqNotes[1]] // NtePltteSq[SeqNotes[n]]
    //note selector circle items
    for (i = 0; i < 12; i++) {
        seqitmX = "seqitm".concat(i);
        document.getElementById(seqitmX).style.fill = NteClrs[SeqNotes[i + 1]];
        seqitmincrcleX = "seqitmincrcle".concat(i);
        document.getElementById(seqitmincrcleX).style.fill = NteClrs[SeqNotes[i + 1]];

        //document.getElementById(seqitmincrcleX).setAttribute("r", "31%");
        //seqitmincrcle
        if (SeqNotesOctv[i + 1] == 2) {
            document.getElementById(seqitmX).setAttribute('d', SmplIco[1]);
        } else {
            document.getElementById(seqitmX).setAttribute('d', SmplIco[0]);
        }

    }

    //static seq circle items
    for (i = 0; i < 12; i++) {
        seqitmX = "stcseqitm".concat(i);
        document.getElementById(seqitmX).style.fill = NteClrs[SeqNotes[i + 1]];
        StcSqItmInCrclX = "StcSqItmInCrcl".concat(i);
        document.getElementById(StcSqItmInCrclX).style.fill = NteClrs[SeqNotes[i + 1]];
        //StcSqItmInCrcl2

        if (SeqNotes[i + 1] == "c#5" || SeqNotes[i + 1] == "d5") {
            document.getElementById(seqitmX).setAttribute('d', SmplIco[1]);
        } else {
            document.getElementById(seqitmX).setAttribute('d', SmplIco[0]);
        }

    }

    // phased Seq circle items
    for (i = 0; i < 12; i++) {
        seqitmX = "phsseqitm".concat(i);
        document.getElementById(seqitmX).style.fill = NteClrs[SeqNotes[i + 1]];
        StcSqItmInCrclX = "PhsSqItmInCrcl".concat(i);
        document.getElementById(StcSqItmInCrclX).style.fill = NteClrs[SeqNotes[i + 1]];
        if (SeqNotes[i + 1] == "c#5" || SeqNotes[i + 1] == "d5") {
            document.getElementById(seqitmX).setAttribute('d', SmplIco[1]);
        } else {
            document.getElementById(seqitmX).setAttribute('d', SmplIco[0]);
        }


    }

    //NtePltteSlctItm1
    for (i = 1; i < 11; i++) {
        seqitmX = "NtePltteSlctItm".concat(i);
        document.getElementById(seqitmX).style.fill = NteClrs[NtePltte[i - 1]];
        document.getElementById(seqitmX).setAttribute('d', SmplIco[0]);

        seqitmX = "NtePltteSlctItm".concat(i + 1);
        document.getElementById(seqitmX).style.fill = NteClrs[NtePltte[i]];
        document.getElementById(seqitmX).setAttribute('d', SmplIco[1]);

        i = i + 1;
    }

   Siema = new Siema({
			selector: '.siema',
			duration: 200,
			easing: 'ease-out',
			perPage: 1,
			startIndex: 0,
			draggable: true,
			multipleDrag: true,
			threshold: 20,
			loop: true,
			rtl: false,
            onInit: () => {},
            onChange: () => {},
		});

    SlctdSqItm = 0;
    itmslct(0);

}



function RtateStop() {
    clearInterval(ani);
      console.log("interupted");
}


function rotate(pos, src) {

  if (src == 'usr') {
      var ofstseq = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      var ofstseqrf = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  }
  //PlyFrmStat = "zero";
  //rotateincre = pos;

  for (i = 0; i < 12; i++) {
    StcSqItmInCrclX = "StcSqItmInCrcl".concat(i);
    PhsSqItmInCrclX = "PhsSqItmInCrcl".concat(i);
    document.getElementById(StcSqItmInCrclX).style.opacity = "0";
    document.getElementById(PhsSqItmInCrclX).style.opacity = "0";
  }

  //forward / back rotate 30 dergees button;
  if (pos == 'frd') {
      pos = PhsItmAnglPos[0] + 15;
      //console.log("bang");
  }

 if (pos == 'bck') {
      pos = PhsItmAnglPos[0] - 15;
  }
    rotateincre = pos;

    console.log("Phase position: ".concat(pos, '\u00B0'));
    //Check for interrupted rotate command
    if (RtateStat == "on") {
        RtateDst = 0;
        RtateDir = 0;
        console.log("interupted");
        RtateStat = "inter";
        //rotate(pos);
    } else {//
          RtateDst = PhsItmAnglPos[0] - pos;

          if (RtateDst < 0) {
              RtateDir = 1;
              RtateDst = RtateDst * -1;
          } else {
              RtateDir = -1;
              RtateDst = RtateDst * -1;
          }
    }

    if (RtateDst > 180) {
        RtateDst = (360 - RtateDst) * -1;
        RtateDir = -1;
    }

    if (RtateDst < -180) {
        RtateDst = (360 + RtateDst) * 1;
        RtateDir = 1;
    }

 //PhsePosCrclA
  //Phase display circles
  PhseDspShftDst[0] = ((pos / 360) * 100) + 50;

  if (PhseDspShftDst[0] < 50) {
      PhseDspShftDst[1] = (100 - PhseDspShftDst[0]) * -1;
      PhseDspShftDst[1] = PhseDspShftDst[1] + 200;
  }  else {
      PhseDspShftDst[1] = (100 - PhseDspShftDst[0]) * -1;
  }


  PhseDspShftShft[0] = PhseDspShftDst[0] - PhseDspShftPos[0];
  PhseDspShftShft[1] = PhseDspShftDst[1] - PhseDspShftPos[1];
  if (PhseDspShftShft[0] > 50) {
      PhseDspShftShft[0] = PhseDspShftShft[0] - 100;
  }

  PhseDspIncre = (PhseDspShftShft[0] / RtateDst) * RtateDir;

    //console.log("rotate");


  //console.log("Phase destination is: ".concat(pos));
  //console.log("Angle position of item 0 is: ".concat(PhsItmAnglPos[0]));
  //console.log("Calculated rotation angle is: ".concat(RtateDst));
  //console.log("Calculated rotation direction is: ".concat(RtateDir));

  //console.log("Calculated Phase display A destination is: ".concat(PhseDspShftDst[0]));
  //console.log("Calculated Phase display B destination is: ".concat(PhseDspShftDst[1]));
  //console.log("Calculated Phase display A shift is: ".concat(PhseDspShftShft[0]));
  //console.log("Calculated Phase display B shift is: ".concat(PhseDspShftShft[1]));
  //console.log("Calculated Phase display increment: ".concat(PhseDspIncre));

  //RadAngleIncre = 0;
  var ani = setInterval(frame, 10);

  n = 0;

      function frame() {
          RtateStat = "on";
          //console.log("Rotate status is: ".concat(RtateStat));
            //RadAngleXi = 0 + RtateDir;
            if (n == RtateDst) {
                clearInterval(ani);
                RtateStat = "off";
                //console.log("Rotate status is: ".concat(RtateStat));
            } else {
                //position seq circles
                for (i = 0; i < 12; i++) {

                    j = [9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8];
                    PhsItmAnglPos[[j[i]]] = PhsItmAnglPos[[j[i]]] + RtateDir;

                    if (PhsItmAnglPos[[j[i]]] < 0) {
                        PhsItmAnglPos[[j[i]]] = 360 + PhsItmAnglPos[[j[i]]];
                    }

                    xpos = (Sqre / 4) + ((((Sqre / 2) - SttcSeqPdng) / 2) - (((Sqre / 2) - SttcSeqPdng) / SeqCrcleSz)) * Math.cos(degrees_to_radians(PhsItmAnglPos[[j[i]]]));

                    ypos = (Sqre / 4) + ((((Sqre / 2) - SttcSeqPdng) / 2) - (((Sqre / 2) - SttcSeqPdng) / SeqCrcleSz)) * Math.sin(degrees_to_radians(PhsItmAnglPos[j[i]]));

                    if (PhsItmAnglPos[[j[i]]] > 360) {PhsItmAnglPos[[j[i]]] = 1;}

                    PhsSqPntX = "PhsSqPnt".concat(i);
                    document.getElementById(PhsSqPntX).setAttribute("cx", "".concat(xpos, "px"));
                    document.getElementById(PhsSqPntX).setAttribute("cy", "".concat(ypos, "px"));

                    PhsSeqPntRctX = "PhsSeqPntRct".concat(i);
                    document.getElementById(PhsSeqPntRctX).setAttribute("x", "".concat((xpos - ((Sqre / 2) / SeqCrcleSz)), "px"));
                    document.getElementById(PhsSeqPntRctX).setAttribute("y", "".concat((ypos - ((Sqre / 2) / SeqCrcleSz)), "px"));

                }

                //position phase seq display circles
                PhseDspShftPos[0] = (PhseDspShftPos[0] + PhseDspIncre);

                if (PhseDspShftPos[1] < -50 || PhseDspShftPos[1] > 150) {

                    if (PhseDspShftPos[1] < -50) {
                    PhseDspShftPos[1] = ((PhseDspShftPos[1] + 200) + PhseDspIncre);
                    }

                    if (PhseDspShftPos[1] > 150) {
                    PhseDspShftPos[1] = ((PhseDspShftPos[1] - 200) + PhseDspIncre);
                    }

                } else {
                    PhseDspShftPos[1] = (PhseDspShftPos[1] + PhseDspIncre);
                }


                document.getElementById("phseshftdegN").innerHTML = PhsItmAnglPos[0];

                document.getElementById("PhsePosCrclA").setAttribute("cx", "".concat(PhseDspShftPos[0], "%"));
                document.getElementById("PhsePosCrclB").setAttribute("cx", "".concat(PhseDspShftPos[1], "%"));
            }
       n = n + RtateDir;
      }

    if (RtateStat == "inter") {
        RtateStat = "off";
        //ready to rotate again
        setTimeout(function() { rotate(pos) },100);

    }

}

var slctdtmpo = 120;
function TmpoChnger() {

    tmpsldervl = document.getElementById("SeqPlyTmpoBxSl").value;
    console.log("tempo change: ".concat(tmpsldervl));
    slctdtmpo = 100 + (200 - tmpsldervl);
    console.log("inverted tempo: ".concat(slctdtmpo));

}


function VolChnger(XxxSq) {
    //XxxSqVol = window["".concat(XxxSq, "Vol")];

    //StcSqVol = document.getElementById("StcSqVolChanger").value;//StcSqVolChanger
    //PhsSqVol = document.getElementById("PhsSqVolChanger").value;

    //console.log("StcSqVol volume change: ".concat(StcSqVol));  //PhsSqVolChanger
    //console.log("PhsSqVol volume change: ".concat(PhsSqVol));
    //console.log("volume change: ".concat(XxxSqVol));
    //PhsSqVol

}

function SmplNteChngr(noteclr) {

		//Remove opacity 0
		document.getElementById("ImgCvr1").classList.remove("transi");
		document.getElementById("ImgCvr2").classList.remove("transi");
		document.getElementById("ImgCvr3").classList.remove("transi");

		//make the change
		SmplClrChnge(noteclr);

		//reveal
		setTimeout(function() { revealer(noteclr) }, 0);

}

function SmplClrChnge(noteclr) {

	//Sample selector
	for (var i = 3; i < 6; i++) {
		SmpleTpXDspPth = document.getElementsByClassName("SmplTp".concat(i));
		SmpleTpXDspPth[0].setAttribute('d', SmplIco[i-1]);
		SmpleTpXDspPth[0].style.fill = SmpleIcoClrs[noteclr];
	}
}



function seqitmchngr(SlctdSqItm, NxtCrSeqNte) {

    seqitmX = "seqitm".concat(SlctdSqItm);
    seqitmundrcrcleX = "seqitmundrcrcle".concat(SlctdSqItm);
    document.getElementById(seqitmX).classList.remove("transi");
    document.getElementById(seqitmundrcrcleX).classList.remove("transi");

    stcseqitmX = "stcseqitm".concat(SlctdSqItm);
    stcseqitmundrcrcleX = "stcseqitmundrcrcle".concat(SlctdSqItm);
    StcSqItmInCrclX = "StcSqItmInCrcl".concat(SlctdSqItm);
    document.getElementById(stcseqitmX).classList.remove("transi");
    document.getElementById(stcseqitmundrcrcleX).classList.remove("transi");
    document.getElementById(StcSqItmInCrclX).classList.remove("transi");


    phsseqitmX = "phsseqitm".concat(SlctdSqItm);
    phsseqitmundrcrcleX = "phsseqitmundrcrcle".concat(SlctdSqItm);
    PhsSqItmInCrclX = "PhsSqItmInCrcl".concat(SlctdSqItm);
    document.getElementById(phsseqitmX).classList.remove("transi");
    document.getElementById(phsseqitmundrcrcleX).classList.remove("transi");
    document.getElementById(PhsSqItmInCrclX).classList.remove("transi");

    //seqitmX = "seqitm".concat(SlctdSqItm);
    document.getElementById(seqitmX).style.fill = NteClrs[NxtCrSeqNte];
    document.getElementById(stcseqitmX).style.fill = NteClrs[NxtCrSeqNte];
    document.getElementById(StcSqItmInCrclX).style.fill = NteClrs[NxtCrSeqNte];
    document.getElementById(PhsSqItmInCrclX).style.fill = NteClrs[NxtCrSeqNte];
    document.getElementById(phsseqitmX).style.fill = NteClrs[NxtCrSeqNte];

    seqitmincrcleX = "seqitmincrcle".concat(SlctdSqItm);
    document.getElementById(seqitmincrcleX).style.fill = NteClrs[NxtCrSeqNte];


    if (NtePltteOctv[NxtCrSeqItm] == 2) {
        document.getElementById(seqitmX).setAttribute('d', SmplIco[1]);
        document.getElementById(stcseqitmX).setAttribute('d', SmplIco[1]);
        document.getElementById(phsseqitmX).setAttribute('d', SmplIco[1]);
    } else {
        document.getElementById(seqitmX).setAttribute('d', SmplIco[0]);
        document.getElementById(stcseqitmX).setAttribute('d', SmplIco[0]);
        document.getElementById(phsseqitmX).setAttribute('d', SmplIco[0]);
    }

    setTimeout(function() { revealer(seqitmX, stcseqitmX, phsseqitmX, seqitmundrcrcleX, stcseqitmundrcrcleX, phsseqitmundrcrcleX) }, 0);
}

function revealer(seqitmX, stcseqitmX, phsseqitmX, seqitmundrcrcleX, stcseqitmundrcrcleX, phsseqitmundrcrcleX) {
	document.getElementById(seqitmX).classList.add("transi");
    document.getElementById(seqitmundrcrcleX).classList.add("transi");

    document.getElementById(stcseqitmX).classList.add("transi");
    document.getElementById(stcseqitmundrcrcleX).classList.add("transi");

    document.getElementById(phsseqitmX).classList.add("transi");
    document.getElementById(phsseqitmundrcrcleX).classList.add("transi");
}


function seqitmfdr(n, mouse) {
    if (mouse == 'over') {
        seqitmincrcleX = "seqitmincrcle".concat(n);
        document.getElementById(seqitmincrcleX).style.opacity = "1";
        //console.log(n);
    }

    if (mouse == 'out') {
        seqitmincrcleX = "seqitmincrcle".concat(n);
        document.getElementById(seqitmincrcleX).style.opacity = "0";
    }
}

function PhsSlctHvr(n, mouse) {
    if (mouse == 'over') {
        //console.log("bang");
        PhsePreBXBx = "PhsePreB".concat(n, "BxCrcl");//.setAttribute("width", "100");
        document.getElementById(PhsePreBXBx).setAttribute("stroke", "#000");
    }

    if (mouse == 'out') {
        //console.log("bang");
        PhsePreBXBx = "PhsePreB".concat(n, "BxCrcl");//.setAttribute("width", "100");
        document.getElementById(PhsePreBXBx).setAttribute("stroke", "#808080");
    }
}

function itmslct(n) {

    for (i = 0; i < 12; i++) {
        seqitmslctbxX = "seqitmslctbx".concat(i);
        document.getElementById(seqitmslctbxX).style.opacity = "0";
        //
    }

    document.getElementById("seqitmslctbx".concat(n)).style.opacity = "1";
}

function StCarPs(n) {

    SlctdSqItm = n;
    Siema.goTo(NtePltteSq[SeqNotes[n + 1]]);
}

function SeqStIncre(dir) {

    if (dir == 'up') {dir = 1;} else {dir = -1;}

    CrntPlttepos = NtePltteSq[SeqNotes[SlctdSqItm + 1]];

    if (CrntPlttepos == 9 && dir == 1) {CrntPlttepos = -1;}
    if (CrntPlttepos == 0 && dir == -1) {CrntPlttepos = 10;}

    SeqNotes[SlctdSqItm + 1] = NtePltte[CrntPlttepos + dir];

    NxtCrSeqNte = SeqNotes[SlctdSqItm + 1];
    NxtCrSeqItm = NtePltteSq[SeqNotes[SlctdSqItm + 1]];

    seqitmchngr(SlctdSqItm, NxtCrSeqNte);
}


function playIt(n, dur) {
    SlctdSqItm = n;

   var osc = new Tone.OmniOscillator().toMaster();
   osc.frequency.value = SeqNotes[SlctdSqItm + 1];
   osc.volume.value = -20;
   Tone.Transport.bpm.value = 60;
   var duration = dur;
   osc.start().stop("+"+duration);
}

var plybtnstat = 0;
function plybtnhvr(itm, pos) {

    if (itm == 'crcl') {
        if (pos == 'over') {
            document.getElementById("playbtncrcle").style.fill =  "#808080";
            document.getElementById("plytri").style.fill =  "#fff";
            document.getElementById("plybar1").style.fill =  "#fff";
            document.getElementById("plybar2").style.fill =  "#fff";
        } else {
            document.getElementById("playbtncrcle").style.fill =  "#fff";
            document.getElementById("plytri").style.fill =  "#808080";
            document.getElementById("plybar1").style.fill =  "#808080";
            document.getElementById("plybar2").style.fill =  "#808080";
        }
    }

    if (itm == 'tri') {
        if (pos == 'over') {
            document.getElementById("playbtncrcle").style.fill =  "#808080";
            document.getElementById("plytri").style.fill =  "#fff";
            document.getElementById("plybar1").style.fill =  "#fff";
            document.getElementById("plybar2").style.fill =  "#fff";
        } else {

        }
    }
}


function playseqtst() {

    document.getElementsByClassName("uicvrbx")[0].style.display = "block";
    document.getElementsByClassName("uicvrbx")[1].style.display = "block";

    //create a synth and connect it to the master output (your speakers)
    synth = new Tone.Synth().toMaster();
    synthb = new Tone.Synth().toMaster();

    tempo = slctdtmpo;
    console.log("Tempo is: ".concat(tempo));


    if (plybtnstat == 0) {//switch to pause icon, PLAY
        icoswtchA = "none";
        icoswtchB = "block";
        plybtnstat = 1;

        CrntDeg = document.getElementById("phseshftdegN").innerHTML;
        Twlvepntshift = Math.floor(parseInt(CrntDeg) / 30);
        UnRndedShift = parseInt(CrntDeg) / 30;

        seqplyn = 0;
        seqrtn = 0;
        phsseqplyn = Twlvepntshift;
        DelayTme = (UnRndedShift - Twlvepntshift) * tempo;

        seqply = setInterval(function () {
            delayfunc();
            seqplyfunc(tempo);
            phsseqplyfunc(tempo);
        }, tempo);

    } else {//switch back to play icon, PAUSE

        document.getElementsByClassName("uicvrbx")[0].style.display = "none";
        document.getElementsByClassName("uicvrbx")[1].style.display = "none";

        icoswtchA = "block";
        icoswtchB = "none";
        plybtnstat = 0;

        clearInterval(seqply);

        setTimeout(function () {
            for (i = 0; i < 12; i++) {
                StcSqItmInCrclX = "StcSqItmInCrcl".concat(i);
                PhsSqItmInCrclX = "PhsSqItmInCrcl".concat(i);
                document.getElementById(StcSqItmInCrclX).style.opacity = "0";
                document.getElementById(PhsSqItmInCrclX).style.opacity = "0";
            }

            ofstseq = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            ofstseqrf = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        }, DelayTme);
    }
    document.getElementById("plytri").style.display = icoswtchA;
    document.getElementById("plybar1").style.display = icoswtchB;
    document.getElementById("plybar2").style.display = icoswtchB;

}

var ofstseq = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var ofstseqrf = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function delayfunc() {

        if (seqrtn == 3) {//incrememt phase
            DelayTme = DelayTme + (tempo * (1 / 6));

            rotateincre = rotateincre + 5;
            if (rotateincre == 360) {rotateincre = 0;}

            rotate(rotateincre, 'cmptr');
            seqrtn = 0;
        }

        if (DelayTme == tempo && seqrtn == 0) {//phased 1 step forward
            //console.log(ofstseq);
            console.log("1 step phase");


            for (i = 0; i < 12; i++) {
                if (i == 0) {
                    ofstseq[0] = ofstseqrf[11];}
                else {
                    ofstseq[i] = ofstseqrf[i - 1];
                }
            }

            DelayTme = 0;

            for (i = 0; i < 12; i++) {
                ofstseqrf[i] = ofstseq[i];
            }
            console.log(ofstseq);
        }
}

var seqplyn = 0;
var seqrtn = 0;
var rotateincre = 0;

function seqplyfunc(tmpo) {

    setTimeout(function () {

        StcSqVol = document.getElementById("StcSqVolChanger").value;
        StcSqItmOp = StcSqVol / 0.6;

        StcSqItmInCrclX = "StcSqItmInCrcl".concat(ofstseq[seqplyn]);
        document.getElementById(StcSqItmInCrclX).style.opacity = StcSqItmOp;

        prvseqplyn = ofstseq[seqplyn] - 1;
        if (prvseqplyn < 0) {prvseqplyn = 11;}
        PrevStcSqItmInCrclX = "StcSqItmInCrcl".concat(prvseqplyn);
        document.getElementById(PrevStcSqItmInCrclX).style.opacity = "0";

        note = SeqNotes[ofstseq[seqplyn] + 1];
        dur = (tmpo * 0.001) - 0.025;

        StcSqVolDb = 6 * (Math.log2(StcSqVol));
        synth.volume.value = StcSqVolDb;
        synth.triggerAttackRelease(note, dur);

        if (seqplyn == 0) {
            console.log("Seq rotations: ".concat(seqrtn + 1), "of 3");
        }

        seqplyn = seqplyn + 1;

        if (seqplyn > 11) {
            seqplyn = 0;

            seqrtn = seqrtn + 1;

        }

    }, DelayTme);

}



var phsseqplyn = 0;

function phsseqplyfunc(tmpo) {

    PhsSqVol = document.getElementById("PhsSqVolChanger").value;
    PhsSqItmOp = PhsSqVol / 0.6;

    PhsSqItmInCrclX = "PhsSqItmInCrcl".concat(phsseqplyn);
    document.getElementById(PhsSqItmInCrclX).style.opacity = PhsSqItmOp;

    prvphsseqplyn = phsseqplyn - 1;
    if (prvphsseqplyn < 0) {prvphsseqplyn = 11;}
    PrevPhsSqItmInCrclX = "PhsSqItmInCrcl".concat(prvphsseqplyn);
    document.getElementById(PrevPhsSqItmInCrclX).style.opacity = 0;

    noteb = SeqNotes[phsseqplyn + 1];
    durb = (tmpo * 0.001) - 0.025;

    PhsSqVolDb = 6 * (Math.log2(PhsSqVol));

    synthb.volume.value = PhsSqVolDb;
    synthb.triggerAttackRelease(noteb, durb);

    phsseqplyn = phsseqplyn + 1;
    if (phsseqplyn > 11) {phsseqplyn = 0;}

}
