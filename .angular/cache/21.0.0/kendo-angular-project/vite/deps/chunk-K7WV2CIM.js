import {
  __async
} from "./chunk-XWLXMCJQ.js";

// node_modules/@progress/kendo-licensing/dist/index.mjs
var _0x503ea4 = _0x1b6e;
(function(_0xff261, _0x5a0331) {
  const _0x5d20e0 = _0x1b6e, _0x258a97 = _0xff261();
  while (!![]) {
    try {
      const _0x5e36d5 = parseInt(_0x5d20e0(390)) / 1 + -parseInt(_0x5d20e0(445)) / 2 + parseInt(_0x5d20e0(512)) / 3 + -parseInt(_0x5d20e0(525)) / 4 + parseInt(_0x5d20e0(408)) / 5 * (parseInt(_0x5d20e0(501)) / 6) + parseInt(_0x5d20e0(440)) / 7 + parseInt(_0x5d20e0(397)) / 8 * (-parseInt(_0x5d20e0(394)) / 9);
      if (_0x5e36d5 === _0x5a0331) break;
      else _0x258a97["push"](_0x258a97["shift"]());
    } catch (_0x1c8687) {
      _0x258a97["push"](_0x258a97["shift"]());
    }
  }
})(_0x34b7, 291489);
var GRACE_SUBSCRIPTION_DAYS = 10;
var JWT_LICENSE_EVIDENCE_TYPE = _0x503ea4(488);
var LOG_HEADER = _0x503ea4(502);
var PUBLIC_KEY = _0x503ea4(517);
var logHeader = (_0x45cf41, _0x5e907a) => "[" + _0x45cf41 + "]" + ("[" + LOG_HEADER + "]") + (_0x5e907a ? " " + _0x5e907a + ":" : "");
function toNumericDate(_0x47b47b) {
  const _0x27b948 = _0x503ea4;
  return Math[_0x27b948(519)](_0x47b47b[_0x27b948(506)]() / 1e3);
}
function addDays(_0x582d68, _0x3c8cd8) {
  const _0x5955f4 = _0x503ea4, _0x497869 = new Date(_0x582d68 * 1e3);
  return _0x497869[_0x5955f4(407)](_0x497869[_0x5955f4(373)]() + _0x3c8cd8), toNumericDate(_0x497869);
}
function getCurrentDate() {
  return toNumericDate(/* @__PURE__ */ new Date());
}
function daysSinceToday(_0x53b270) {
  const _0x4745e0 = _0x503ea4, _0x5c9172 = getCurrentDate() - toNumericDate(_0x53b270), _0x3e6dab = Math[_0x4745e0(519)](_0x5c9172 / (24 * 60 * 60));
  return _0x3e6dab;
}
function decodeString(_0x3b742f) {
  const _0x44723c = _0x503ea4;
  if (typeof atob === _0x44723c(375)) {
    if (_0x44723c(356) === _0x44723c(399)) _0x419c95 = new _0x117713(_0x3974e7[_0x44723c(509)], _0x2de6af[_0x44723c(460)], _0x2c8ba7[_0x44723c(435)]);
    else return atob(_0x3b742f);
  }
  if (typeof Buffer === _0x44723c(375)) {
    if (_0x44723c(431) === _0x44723c(441)) {
      const _0xbf10ec = _0x38b815[_0x44723c(464)](_0x524005(_0x32f62c));
      _0x3740b7[_0x44723c(471)](_0xbf10ec[3]) && _0xbf10ec[_0x44723c(430)](3, 0, "");
      const _0x5a48dd = { "products": _0xbf10ec[1][_0x44723c(368)](([_0x4fb229, _0x502081, _0x5e98a9]) => ({ "code": _0x4fb229, "licenseExpirationDate": _0x502081, "trial": _0x52c99d(_0x5e98a9) })), "userId": _0xbf10ec[2], "integrity": _0xbf10ec[3], "licenses": _0xbf10ec[4], "scriptKey": !![] };
      try {
        const _0xa34896 = _0x3d40a3[_0x44723c(464)](_0x55222f[_0x44723c(457)]);
        _0x5a48dd[_0x44723c(416)] = [..._0xa34896[_0x44723c(416)], ..._0x5a48dd[_0x44723c(416)]], _0x5a48dd[_0x44723c(516)] = [..._0xa34896[_0x44723c(516)], ..._0x5a48dd[_0x44723c(516)]];
      } catch (_0x57c7a7) {
      }
      _0x16700f[_0x44723c(457)] = _0x5b08a9[_0x44723c(364)](_0x5a48dd);
    } else return Buffer[_0x44723c(472)](_0x3b742f, _0x44723c(455))[_0x44723c(439)](_0x44723c(443));
  }
  throw new Error(_0x44723c(524));
}
function decodeBase64(_0x1e3769) {
  const _0x563d11 = _0x503ea4, _0x2527df = decodeString(_0x1e3769), _0x359df7 = new Uint8Array(_0x2527df[_0x563d11(521)]);
  for (let _0x5ef48a = 0; _0x5ef48a < _0x2527df[_0x563d11(521)]; _0x5ef48a++) {
    if (_0x563d11(415) !== _0x563d11(415)) return _0x2712ac[_0x563d11(451)](_0x2664e5[_0x563d11(496)]);
    else _0x359df7[_0x5ef48a] = _0x2527df[_0x563d11(477)](_0x5ef48a);
  }
  return _0x359df7;
}
function decodeBase64Url(_0x270e69) {
  const _0x150bdb = _0x503ea4, _0x5787df = _0x270e69[_0x150bdb(475)](/-/g, "+")[_0x150bdb(475)](/_/g, "/");
  return decodeBase64(_0x5787df);
}
function decodeLicenseEvidence(_0xff4994) {
  const _0x420d5 = _0x503ea4, _0x1bf6a8 = _0xff4994[_0x420d5(404)](".")[1], _0x58a946 = String[_0x420d5(384)](...decodeBase64Url(_0x1bf6a8));
  return JSON[_0x420d5(464)](_0x58a946);
}
function toDate(_0x3baef9) {
  return new Date(_0x3baef9 * 1e3);
}
function isExpired(_0x371393, _0x22c437) {
  const _0x2833b2 = _0x503ea4, _0x4e55da = toDate(_0x22c437), _0x30589d = new Date(_0x4e55da[_0x2833b2(379)](), _0x4e55da[_0x2833b2(412)](), _0x4e55da[_0x2833b2(373)]() + 1), _0x18168e = _0x30589d[_0x2833b2(506)]() / 1e3;
  return _0x371393 > _0x18168e;
}
function findPackageLicense(_0x3f03d8, _0x464923) {
  const _0x540f0c = _0x503ea4, _0x54ed22 = _0x464923[_0x540f0c(518)]((_0x4cefda) => _0x4cefda[_0x540f0c(447)] !== _0x540f0c(351))[_0x540f0c(518)]((_0x426684) => {
    const _0x9aabcc = _0x540f0c;
    if (_0x9aabcc(489) === _0x9aabcc(490)) return;
    else {
      var _0x1e8ef6, _0x11137f;
      return _0x3f03d8[_0x9aabcc(529)] === _0x426684[_0x9aabcc(480)] || ((_0x1e8ef6 = _0x3f03d8[_0x9aabcc(462)]) === null || _0x1e8ef6 === void 0 ? void 0 : _0x1e8ef6[_0x9aabcc(465)](_0x426684[_0x9aabcc(480)])) || ((_0x11137f = _0x3f03d8[_0x9aabcc(383)]) === null || _0x11137f === void 0 ? void 0 : _0x11137f[_0x9aabcc(465)](_0x426684[_0x9aabcc(480)]));
    }
  })[_0x540f0c(400)]((_0xbab5fe, _0xc4b551) => _0xc4b551[_0x540f0c(448)] - _0xbab5fe[_0x540f0c(448)]), _0x23e7e5 = () => _0x54ed22[_0x540f0c(538)]((_0x58b7ad) => _0x58b7ad[_0x540f0c(447)] === _0x540f0c(522) && !isExpired(getCurrentDate(), _0x58b7ad[_0x540f0c(448)])), _0xba0913 = () => _0x54ed22[_0x540f0c(538)]((_0x32a8e9) => _0x32a8e9[_0x540f0c(447)] === _0x540f0c(413) && !isExpired(_0x3f03d8[_0x540f0c(511)], _0x32a8e9[_0x540f0c(448)])), _0x1839d8 = () => _0x54ed22[_0x540f0c(538)]((_0x36fe15) => _0x36fe15[_0x540f0c(447)] === _0x540f0c(522) && !isExpired(addDays(getCurrentDate(), GRACE_SUBSCRIPTION_DAYS), _0x36fe15[_0x540f0c(448)])), _0x4b99f2 = () => _0x54ed22[_0x540f0c(538)]((_0x5ba486) => _0x5ba486[_0x540f0c(447)] === _0x540f0c(357) && !isExpired(getCurrentDate(), _0x5ba486[_0x540f0c(448)])), _0x162ba1 = () => _0x54ed22[_0x540f0c(538)]((_0x188bc7) => _0x188bc7[_0x540f0c(447)] === _0x540f0c(413)), _0x45fd14 = () => _0x54ed22[_0x540f0c(538)]((_0x83a13b) => _0x83a13b[_0x540f0c(447)] === _0x540f0c(522)), _0x11bb59 = () => _0x54ed22[_0x540f0c(538)]((_0x9a32ae) => _0x9a32ae[_0x540f0c(447)] === _0x540f0c(357));
  return _0x23e7e5() || _0xba0913() || _0x1839d8() || _0x4b99f2() || _0x45fd14() || _0x162ba1() || _0x11bb59();
}
function findRuntimeLicense(_0x3e0f47, _0x3dd175) {
  const _0x4cf123 = _0x503ea4;
  var _0x470dab, _0x4ad3c;
  let _0x4641d8 = [];
  if (((_0x470dab = _0x3e0f47[_0x4cf123(516)]) === null || _0x470dab === void 0 ? void 0 : _0x470dab[_0x4cf123(521)]) > 0) {
    if (_0x4cf123(487) !== _0x4cf123(487)) {
      const _0x25587a = _0x41049e(_0x5037d0(_0x73ec2d[_0x4cf123(448)]));
      _0xde22bc(_0x9efe72(), _0x2c778e[_0x4cf123(448)]) ? _0x387190 = new _0x1e6818(_0x420316[_0x4cf123(509)], _0x496172[_0x4cf123(460)], _0x25587a) : (_0xbbecad = new _0x46fbb0(_0x48faad[_0x4cf123(509)], _0x25587a), _0x4159f2 = !![]);
    } else _0x4641d8 = _0x3e0f47[_0x4cf123(516)][_0x4cf123(368)]((_0x527f1d) => decodeLicenseEvidence(_0x527f1d));
  } else {
    if (((_0x4ad3c = _0x3e0f47[_0x4cf123(416)]) === null || _0x4ad3c === void 0 ? void 0 : _0x4ad3c[_0x4cf123(521)]) > 0) {
      if (_0x4cf123(387) !== _0x4cf123(387)) {
        const _0x38de5a = _0x3d9571[_0x4cf123(380)](_0xe10c7a, _0x2d28a3 + 2);
        _0x55b941[_0x4cf123(495)](_0x24240d[_0x4cf123(504)](_0x38de5a, 21));
      } else _0x4641d8 = _0x3e0f47[_0x4cf123(416)][_0x4cf123(368)]((_0x2ab9) => ({ "type": _0x2ab9[_0x4cf123(357)] ? _0x4cf123(357) : _0x4cf123(413), "code": _0x2ab9[_0x4cf123(480)], "expiration": _0x2ab9[_0x4cf123(386)], "licenseId": null, "userId": _0x3e0f47[_0x4cf123(365)] }));
    }
  }
  return findPackageLicense(_0x3dd175, _0x4641d8);
}
var getProductCode = (_0x354d3d) => _0x354d3d[_0x503ea4(529)] || _0x354d3d[_0x503ea4(383)][0];
var NoLicenseFoundRuntimeError = class {
  constructor(_0x56ee4a, _0x35a965, _0x297236) {
    const _0x45b2d1 = _0x503ea4;
    this[_0x45b2d1(509)] = _0x56ee4a, this[_0x45b2d1(354)] = _0x45b2d1(427), this[_0x45b2d1(480)] = _0x45b2d1(421), this[_0x45b2d1(499)] = _0x45b2d1(503) + _0x45b2d1(479), this[_0x45b2d1(476)] = _0x45b2d1(396) + _0x56ee4a + " v" + _0x35a965 + "." + (_0x45b2d1(534) + _0x297236 + _0x45b2d1(467));
  }
};
var ProductNotLicensedRuntimeError = class {
  constructor(_0x41fb00, _0x4ba6c1, _0x27f17e) {
    const _0x40b5c3 = _0x503ea4;
    this[_0x40b5c3(509)] = _0x41fb00, this[_0x40b5c3(354)] = _0x40b5c3(427), this[_0x40b5c3(480)] = _0x40b5c3(498), this[_0x40b5c3(499)] = _0x41fb00 + _0x40b5c3(417) + (_0x40b5c3(485) + _0x41fb00 + _0x40b5c3(539) + _0x27f17e), this[_0x40b5c3(476)] = _0x40b5c3(426) + _0x41fb00 + " v" + _0x4ba6c1 + "." + (_0x40b5c3(362) + _0x27f17e + _0x40b5c3(497));
  }
};
var ExpiredTrialLicenseRuntimeError = class {
  constructor(_0x27fca7, _0x5e7e5c, _0x3ed42c) {
    const _0x45f6c4 = _0x503ea4;
    this[_0x45f6c4(509)] = _0x27fca7, this[_0x45f6c4(354)] = _0x45f6c4(427), this[_0x45f6c4(480)] = _0x45f6c4(463), this[_0x45f6c4(499)] = _0x45f6c4(361) + _0x3ed42c + _0x45f6c4(466) + (_0x45f6c4(428) + _0x27fca7 + _0x45f6c4(360)) + _0x45f6c4(450), this[_0x45f6c4(476)] = _0x45f6c4(363) + _0x27fca7 + " v" + _0x5e7e5c + _0x45f6c4(470) + _0x3ed42c + _0x45f6c4(491) + _0x45f6c4(381) + (_0x45f6c4(533) + _0x27fca7 + _0x45f6c4(376));
  }
};
var ExpiredLicenseRuntimeError = class {
  constructor(_0x42d9a6, _0x1f967e, _0x4058a8, _0x35cafd, _0x4b2293) {
    const _0x468aea = _0x503ea4;
    this[_0x468aea(509)] = _0x42d9a6, this[_0x468aea(354)] = _0x468aea(427), this[_0x468aea(480)] = _0x468aea(474);
    const _0x596e32 = _0x4058a8 ? _0x468aea(486) + _0x4058a8 : "";
    this[_0x468aea(499)] = _0x468aea(392) + _0x1f967e[_0x468aea(367)]() + _0x468aea(414) + ("" + _0x42d9a6 + _0x596e32 + _0x468aea(535) + _0x35cafd[_0x468aea(367)]() + ".\n") + _0x468aea(484), this[_0x468aea(476)] = _0x468aea(530) + _0x42d9a6 + " v" + _0x4058a8 + ". " + (_0x468aea(478) + _0x4b2293 + _0x468aea(461)) + _0x468aea(523);
  }
};
function _0x1b6e(_0x3c8da9, _0x40ded1) {
  const _0x34b7c1 = _0x34b7();
  return _0x1b6e = function(_0x1b6e8c, _0x233fc5) {
    _0x1b6e8c = _0x1b6e8c - 351;
    let _0x10cf91 = _0x34b7c1[_0x1b6e8c];
    if (_0x1b6e["aEsuXv"] === void 0) {
      var _0x108ac5 = function(_0x29a40b) {
        const _0x40ae9c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0x37e642 = "", _0x54c48 = "";
        for (let _0x407b29 = 0, _0x2f2adb, _0x4e24da, _0xe70326 = 0; _0x4e24da = _0x29a40b["charAt"](_0xe70326++); ~_0x4e24da && (_0x2f2adb = _0x407b29 % 4 ? _0x2f2adb * 64 + _0x4e24da : _0x4e24da, _0x407b29++ % 4) ? _0x37e642 += String["fromCharCode"](255 & _0x2f2adb >> (-2 * _0x407b29 & 6)) : 0) {
          _0x4e24da = _0x40ae9c["indexOf"](_0x4e24da);
        }
        for (let _0x40e316 = 0, _0x45bb99 = _0x37e642["length"]; _0x40e316 < _0x45bb99; _0x40e316++) {
          _0x54c48 += "%" + ("00" + _0x37e642["charCodeAt"](_0x40e316)["toString"](16))["slice"](-2);
        }
        return decodeURIComponent(_0x54c48);
      };
      _0x1b6e["nFuqto"] = _0x108ac5, _0x3c8da9 = arguments, _0x1b6e["aEsuXv"] = !![];
    }
    const _0x36fc5a = _0x34b7c1[0], _0xeb8253 = _0x1b6e8c + _0x36fc5a, _0x5d1391 = _0x3c8da9[_0xeb8253];
    return !_0x5d1391 ? (_0x10cf91 = _0x1b6e["nFuqto"](_0x10cf91), _0x3c8da9[_0xeb8253] = _0x10cf91) : _0x10cf91 = _0x5d1391, _0x10cf91;
  }, _0x1b6e(_0x3c8da9, _0x40ded1);
}
var TrialLicenseRuntimeInfo = class {
  constructor(_0x4217f3, _0xadb2fe) {
    const _0x380c43 = _0x503ea4;
    this[_0x380c43(509)] = _0x4217f3, this[_0x380c43(354)] = _0x380c43(432), this[_0x380c43(499)] = _0x380c43(493) + -_0xadb2fe + _0x380c43(402) + _0x380c43(420);
  }
};
function importRsaKey(_0x4b9b47) {
  const _0x568546 = _0x503ea4, _0x54f940 = _0x568546(473), _0x20f0eb = _0x568546(393), _0x2564d9 = _0x4b9b47[_0x568546(475)](_0x54f940, "")[_0x568546(475)](_0x20f0eb, "")[_0x568546(475)](/\n/gm, ""), _0x1d144e = decodeBase64(_0x2564d9);
  return crypto[_0x568546(359)][_0x568546(434)](_0x568546(494), _0x1d144e, { "name": _0x568546(411), "hash": _0x568546(468) }, !![], [_0x568546(374)]);
}
function verifyLicenseEvidence(_0x2dd50d, _0x3d20b3) {
  return __async(this, null, function* () {
    const _0x3c70ba = _0x503ea4;
    if (typeof crypto !== _0x3c70ba(401) || typeof crypto[_0x3c70ba(359)] !== _0x3c70ba(401) || typeof TextEncoder !== _0x3c70ba(375) || typeof TextDecoder !== _0x3c70ba(375)) {
      if (_0x3c70ba(505) === _0x3c70ba(391)) {
        const _0x1a6556 = _0x170fa1[_0x3c70ba(475)](/-/g, "+")[_0x3c70ba(475)](/_/g, "/");
        return _0x425f3f(_0x1a6556);
      } else return;
    }
    const _0x1074d2 = crypto[_0x3c70ba(359)], [_0x1ce571, _0x5040b3, _0x10c239] = _0x2dd50d[_0x3c70ba(404)]("."), _0x50c50d = decodeBase64Url(_0x10c239), _0x4ecf7e = new TextEncoder(), _0x1c946a = new TextDecoder(), _0x4632a4 = _0x4ecf7e[_0x3c70ba(422)](_0x1ce571 + "." + _0x5040b3), _0x56ee99 = _0x1c946a[_0x3c70ba(454)](decodeBase64Url(_0x1ce571)), _0x41422c = JSON[_0x3c70ba(464)](_0x56ee99)[_0x3c70ba(531)] === JWT_LICENSE_EVIDENCE_TYPE;
    if (!_0x41422c) {
      if (_0x3c70ba(388) !== _0x3c70ba(409)) throw new Error(_0x3c70ba(352));
      else {
        if (typeof _0x4773b0 === _0x3c70ba(375)) return _0x1835cb(_0x52eaa9);
        if (typeof _0x205b53 === _0x3c70ba(375)) return _0xa730ce[_0x3c70ba(472)](_0x30e88a, _0x3c70ba(455))[_0x3c70ba(439)](_0x3c70ba(443));
        throw new _0x5dbed1(_0x3c70ba(524));
      }
    }
    const _0x148434 = yield importRsaKey(_0x3d20b3), _0x1b6629 = yield _0x1074d2[_0x3c70ba(374)](_0x148434[_0x3c70ba(355)], _0x148434, _0x50c50d, _0x4632a4);
    if (!_0x1b6629) {
      if (_0x3c70ba(424) === _0x3c70ba(424)) throw new Error(_0x3c70ba(438));
      else _0x5249db[_0x3c70ba(442)](_0x4eaa6c);
    }
  });
}
var context = { data: '  {"products":[],"licenses":["eyJhbGciOiJSUzI1NiIsInR5cCI6IlRlbGVyaWsgTGljZW5zZSBFdmlkZW5jZSJ9.eyJjb2RlIjoiS0VORE9VSUFOR1VMQVIiLCJ0eXBlIjoidHJpYWwiLCJleHBpcmF0aW9uIjoxNzcyODA4NTgwLCJ1c2VySWQiOiI0MzJkNWNmNS1hMTZjLTQwOWEtOTA2Ny1mOGNmMzk1Y2JjNGQiLCJsaWNlbnNlSWQiOiJjNmE3ZTZlNi1jOGIzLTRkOGMtOTExMC02MDJjYmMzMjk1OWUifQ.qL_pA1F_smReHCsiymSBFxc42bm2ZkZvdfV9BqCRmNNB5eFFB44E_o0Q2ajvWu7iEduQl0pnWFjvSoXWmDeOOL73I2cMkm7BBSmCyyhqfJxc3scQqP7uapKLsX5S2zy--L9Wly6_c7Ugy9mK2y4g34tSsiee0_jUQmkHOZqngpqEG3Yd94TQIGuUcWuSoN71NX81mNbrvUv0iRVPZwTdROFchZ31zbL_7sPdUG-zG2J3S3d_E48smqTPgSjvC-sm9_A7DQwK3uEfbXqSUkEvzZGO89UbesjZ9rsYmCgjTUuGEWhp1EfVnzISBbmAd2_q9HKpTMGCp5yhcjY8FlMsEA"],"userId":"432d5cf5-a16c-409a-9067-f8cf395cbc4d","integrity":"R+jE9ep7ptzyla9Pzkma9z9mxSw818eRX+3R582NeO4=","scriptKey":false,"timestamp":1771431149}  ' };
function _0x34b7() {
  const _0x2fcdd9 = ["DMvYAwz5", "zNvUy3rPB24", "igXPy2vUC2LUzZWVyt4U", "q1DpAwy", "wwjVtLa", "z2v0rNvSBfLLyxi", "C2XPy2u", "vg8Gy29UDgLUDwuGDxnPBMCGB3vYihbYB2r1y3qSignVBNnPzgvYihvWz3jHzgLUzYb0BYbHignVBw1LCMnPywWGBgLJzw5Zzs4G", "AgfZ", "ChjVzhvJDenVzgvZ", "zNjVBunOyxjdB2rL", "C2v0", "BgLJzw5Zzuv4CgLYyxrPB25eyxrL", "vfzJz2q", "DhjQA0C", "vK1bzu8", "nJiYmtnOtgH0CK0", "wKz1vwu", "ww91CIbJDxjYzw50igXPy2vUC2uGAgfZigv4CgLYzwqGB24G", "ls0Tls1ftKqGufvcteLdieTfws0Tls0T", "mJG0ng55wfL2sq", "DuHrrhu", "tgLJzw5ZzsbRzxKGBwLZC2LUzYbMB3iG", "mtm3nNnQD3furq", "BNfuEu4", "DgLdCui", "C29YDa", "B2jQzwn0", "igrHEsHZks4k", "C0P2D0S", "C3bSAxq", "Dw5KzwzPBMvK", "CMzdwLG", "C2v0rgf0zq", "nxfOtKTVwG", "tfPREeG", "vxnjwfe", "uLnbu1nblvblq1mXlxyXxZu", "z2v0tw9UDgG", "CgvYCgv0DwfS", "igfUzcbPCYbUB3qGDMfSAwqGzM9Yia", "ChviBNm", "ChjVzhvJDhm", "igLZig5VDcbSAxn0zwqGAw4GEw91CIbJDxjYzw50igXPy2vUC2uGzMLSzs4k", "z3jVDxbfBMq", "EuDNyvq", "icbuBYbHy3f1AxjLigeGy29TBwvYy2LHBcbSAwnLBNnLlcb2AxnPDcbODhrWCZOVl3bYz3jLC3mUy28Vm1b5seLVsa", "veTmmJaX", "zw5JB2rL", "ww5gA2q", "v2PWAMW", "BwDjzey", "tM8GBgLJzw5ZzsbMB3vUzcbMB3iG", "v0fstG", "icbuAgfUAYb5B3uGzM9YihrYEwLUzYbVDxqG", "C2fuv2S", "C3bSAwnL", "AKTdyMK", "su5gtW", "uMnxvhe", "Aw1WB3j0s2v5", "BgLJzw5ZAw5Nrg9JC1vYBa", "D2fYBG", "BKPmDhq", "sw52ywXPzcbSAwnLBNnLigv2AwrLBMnL", "Dg9tDhjPBMC", "mtK1mJm0mKjrzxLXzq", "EKPQt3i", "z3jVDxa", "DxrMoa", "sw1hzeG", "nJC2mtK2v2HOrfvU", "C2nYAxb0s2v5", "DhLWzq", "zxHWAxjHDgLVBG", "s0fOv0m", "icbuBYbJB250Aw51zsb1C2LUzYbVDxiGChjVzhvJDcWGy29UC2LKzxiGDxbNCMfKAw5NihrVigeGy29TBwvYy2LHBcbSAwnLBNnLoIbODhrWCZOVl3bYz3jLC3mUy28Vm0m5BxiXtq", "z2v0", "Ae9TDMy", "ANjvzKC", "zgvJB2rL", "yMfZzty0", "txfbz0y", "zgf0yq", "AM9PBG", "sLjIz1e", "DMvYC2LVBG", "iJ52ywXPzcbSAwnLBNnLpc9HpI4G", "CMvKAxn0CMLIDxrLzej5", "veTmmJaZ", "CgfYC2u", "Aw5JBhvKzxm", "igrHEsHZksbHz28UcG", "iJ5OB3CGDg8GC2v0ihvWigeGBgLJzw5ZzsbRzxK8l2e+lG", "u0Hblti1nG", "u3zVq2W", "igHHCYbLEhbPCMvKia", "AxnbCNjHEq", "zNjVBq", "ls0Tls1cruDjtIbqvujmsumGs0vzls0Tls0", "veTmmJa0", "CMvWBgfJzq", "BM90AwzPy2f0Aw9UtwvZC2fNzq", "y2HHCKnVzgvbDa", "vg8Gy29UDgLUDwuGDxnPBMCGDgHLihbYB2r1y3qSigLUC3rHBgWGysa8ysbOCMvMpsi", "icbuBYbKB3DUBg9HzcbHigXPy2vUC2uGA2v5igzPBguSihzPC2L0igH0DhbZoI8VChjNCMvZCY5JBY8ZuhDrtuTA", "y29Kzq", "tgHqvMy", "y2XLyxi", "AgPdvKi", "icbszw5LDYb5B3vYigXPy2vUC2uGyxqGAhr0Chm6lY9WCMDYzxnZlMnVlZnqEdLTnuy", "icbmzwfYBIbTB3jLigfIB3v0ia", "ihzLCNnPB24G", "s0LJCfi", "vgvSzxjPAYbmAwnLBNnLiev2AwrLBMnL", "AururwS", "Buj2s0G", "igfNBY4G", "A0zsqvm", "ww91CIbuCMLHBcbSAwnLBNnLihDPBgWGzxHWAxjLigLUia", "C3bRAq", "ChvZAa", "BMfTzq", "iJ52ywXPzcbSAwnLBNnLpc9HpI4", "veTmmJaY", "BwvZC2fNzq", "ywXS", "mJK2nZG1oeXlCefIEq", "vgvSzxjPAYbHBMqGs2vUzg8GvuKGtgLJzw5ZAw5N", "tM8GvgvSzxjPAYbHBMqGs2vUzg8GvuKGtgLJzw5ZzsbMB3vUzc4k", "CgfYC2vjBNq", "DNzfDvK", "z2v0vgLTzq", "DgHLBG", "DgLTzxn0yw1W", "ChjVzhvJDe5HBwu", "ywrK", "ChvIBgLZAerHDgu", "ntu2nuHAr3vOAW", "y3bVzMC", "sxb2uMG", "zM1wu0C", "BgLJzw5Zzxm", "ls0Tls1cruDjtIbqvujmsumGs0vzls0Tls0ktuLjqKLQqu5cz2TXAgTPrZL3mejbuuvgqufpq0froefnsuLcq2Dlq0frrueYBw5vvK1TA3rOmNGRtI9prhn6rWPprKLzqKW2tK9pmvHxuMOXD2TTzwnlDuX6AuPeAez6mfDrBxLpALKZnfLTzZLWthvcqtLru1DYCLP1DLb3ndbocM0Wwc9hqM10DezTue52y2eZv21kmM9lttDqCeXPvvu5zJDpDJvxzuLyBNGRk3rZl0Xdl09cn0z0wITmAvjNsJCkmg1ABLbLvg9NzezYqvnMmhPtuuP2ngPTwdG0meXqytzUB21xzvvNsvzhueXmvKKXneDPyJHeBcTUt2nRCunoyWPRqvvvAZrjqKy2n0r1zLj0oxPrEvj4zZK5ExnHA3ziwdjtrgjKr3zjqMr4v3H2AgHTCKjVzwL4mhvtvNrhmMDTcMPKDLnXBfbkvMr2twjRmvHLmITtvwXKsLbYEeGXvNjuwwvsvxq0ExfxEhKXnM5gsLveAJLLEfOYmdjynfriA1uksLfjrefrquikls0Tls1ftKqGufvcteLdieTfws0Tls0T", "zMLSDgvY", "zMXVB3i", "CvPjExq", "BgvUz3rO", "C3vIC2nYAxb0Aw9U", "uMvUzxCGpgeGAhjLzJ0IAhr0Chm6lY9WCMDYzxnZlMnVlZnqD1foAteIpNLVDxiGBgLJzw5ZztWVyt4Gyw5KigrVD25SB2fKigeGBMv3igXPy2vUC2uGA2v5lG", "yxrVyIbPCYb1BMrLzMLUzwq", "nJe0nZeYq09ot21u", "tgLdCge", "uNnpr2G", "y2f0y2G", "ChjVzhvJDenVzgu", "ww91CIbSAwnLBNnLigLZig5VDcb2ywXPzcbMB3iG", "DhLW", "Eu95z08", "tgvHCM4GBw9YzsbHyM91Dca8ysbOCMvMpsjODhrWCZOVl3bYz3jLC3mUy28Vm1b3uu1Kwci+", "icbbigXPy2vUC2uGA2v5igLZihjLCxvPCMvKigzVCIbIB3rOihbHAwqGyw5KihrYAwfSihvZywDLlIbmzwfYBIa8ysbOCMvMpsi", "lIbuAguGChjVzhvJDcb3yxmGChvIBgLZAgvKig9Uia", "sMPoq1y", "C3r6txC", "zMLUza", "igXPy2vUC2LUzYbHDca", "DxnHz2u", "vw5RBM93BIbSAwnLBNnLigv2AwrLBMnLihr5Cgu", "DhjPBq", "C2v2zxjPDhK", "ywXNB3jPDgHT", "A2fAy2m", "DhjPywW", "sg12vwW", "C3vIDgXL", "lcb3zsbOB3bLihLVDsbLBMPVEwvKihLVDxiGDhjPywWGCgvYAw9KlGO", "ww91CIb0CMLHBcbOyxmGzxHWAxjLzca", "icbby2nLC3mGDg8GDgHLigXHDgvZDcb1CgrHDgvZigfUzcbZDxbWB3j0ihjLCxvPCMvZigeGpgeGAhjLzJ0I", "ww91CIb0CMLHBcbSAwnLBNnLigzVCIa", "C3rYAw5NAwz5", "DxnLCKLK", "v1boBxO", "Dg9mB2nHBgveyxrLu3rYAw5N", "BwfW", "rKjWBKK", "s09pDuq", "D0rczeK", "EuDrBfu", "z2v0rgf0zq"];
  _0x34b7 = function() {
    return _0x2fcdd9;
  };
  return _0x34b7();
}
var publicKey = PUBLIC_KEY;
var cache = /* @__PURE__ */ new Map();
var touchedProducts = /* @__PURE__ */ new Set();
var validateEvidencesCache = !![];
var validateEvidences = (_0x560152) => {
  const _0x1abe91 = _0x503ea4;
  var _0x4ef9f1, _0x5e4da1;
  if (((_0x4ef9f1 = _0x560152[_0x1abe91(516)]) === null || _0x4ef9f1 === void 0 ? void 0 : _0x4ef9f1[_0x1abe91(521)]) > 0) {
    if (_0x1abe91(403) === _0x1abe91(537)) return _0x4c4182(_0x455cda);
    else Promise[_0x1abe91(500)]((_0x5e4da1 = _0x560152[_0x1abe91(516)]) === null || _0x5e4da1 === void 0 ? void 0 : _0x5e4da1[_0x1abe91(368)]((_0x1ef060) => verifyLicenseEvidence(_0x1ef060, publicKey)))[_0x1abe91(507)](() => {
      const _0x36695f = _0x1abe91;
      if (_0x36695f(366) === _0x36695f(366)) validateEvidencesCache = !![];
      else {
        var _0x4cf556, _0x32965c;
        return ((_0x4cf556 = _0x1a266b[_0x36695f(516)]) === null || _0x4cf556 === void 0 ? void 0 : _0x4cf556[_0x36695f(521)]) > 0 && _0x2c4205[_0x36695f(500)]((_0x32965c = _0x1bfa5e[_0x36695f(516)]) === null || _0x32965c === void 0 ? void 0 : _0x32965c[_0x36695f(368)]((_0x3c51de) => _0xf59e44(_0x3c51de, _0x427c2c)))[_0x36695f(507)](() => {
          _0x1553a7 = !![];
        })[_0x36695f(528)](() => {
          const _0x5e6264 = _0x36695f;
          _0x15ddb4 = ![], _0x4914c[_0x5e6264(482)]();
        }), _0x34fcd0;
      }
    })[_0x1abe91(528)](() => {
      const _0x1260bb = _0x1abe91;
      if (_0x1260bb(459) !== _0x1260bb(459)) {
        if (_0x2c618d[_0x1260bb(382)](_0x5d3f22[_0x1260bb(496)])) return _0x277176[_0x1260bb(451)](_0x2d7c67[_0x1260bb(496)]);
        const { isLicenseValid: _0x5edc5c, message: _0x16d065 } = _0xd087b7(_0x134fda), _0x2880a9 = _0x3748f7(_0x442c9b);
        return _0x16d065 && !_0x1a07d9[_0x1260bb(382)](_0x2880a9) && (_0x70c02c(_0x16d065, _0x172cde), _0x555466[_0x1260bb(510)](_0x2880a9)), _0x41f8da[_0x1260bb(385)](_0x3c4bb7[_0x1260bb(496)], _0x5edc5c), _0x5edc5c;
      } else validateEvidencesCache = ![], cache[_0x1260bb(482)]();
    });
  }
  return validateEvidencesCache;
};
function getLicenseStatus(_0x160b04) {
  const _0x48d7ae = _0x503ea4, _0x8c0425 = JSON[_0x48d7ae(464)](context[_0x48d7ae(457)]), _0x10cda0 = !_0x8c0425[_0x48d7ae(446)] && !_0x8c0425[_0x48d7ae(508)], _0x2c8422 = _0x8c0425[_0x48d7ae(446)] && typeof KendoLicensing === _0x48d7ae(405);
  let _0xd562bb, _0x52bae0 = ![], _0x18c586;
  if (_0x10cda0 || _0x2c8422 || !validateEvidences(_0x8c0425)) _0x48d7ae(433) === _0x48d7ae(520) ? (_0x43597b = ![], _0x2c2c9d[_0x48d7ae(482)]()) : _0xd562bb = new NoLicenseFoundRuntimeError(_0x160b04[_0x48d7ae(509)], _0x160b04[_0x48d7ae(460)], _0x160b04[_0x48d7ae(435)]);
  else {
    if (_0x48d7ae(358) === _0x48d7ae(429)) {
      const _0x43b179 = _0x48d7ae(473), _0x68d536 = _0x48d7ae(393), _0x5a6c26 = _0x5662ac[_0x48d7ae(475)](_0x43b179, "")[_0x48d7ae(475)](_0x68d536, "")[_0x48d7ae(475)](/\n/gm, ""), _0x10bbbc = _0x247368(_0x5a6c26);
      return _0x28611c[_0x48d7ae(359)][_0x48d7ae(434)](_0x48d7ae(494), _0x10bbbc, { "name": _0x48d7ae(411), "hash": _0x48d7ae(468) }, !![], [_0x48d7ae(374)]);
    } else {
      _0x18c586 = findRuntimeLicense(_0x8c0425, _0x160b04);
      if (!_0x18c586) _0x48d7ae(492) === _0x48d7ae(492) ? _0xd562bb = new ProductNotLicensedRuntimeError(_0x160b04[_0x48d7ae(509)], _0x160b04[_0x48d7ae(460)], _0x160b04[_0x48d7ae(435)]) : (this[_0x48d7ae(509)] = _0x3738df, this[_0x48d7ae(354)] = _0x48d7ae(427), this[_0x48d7ae(480)] = _0x48d7ae(498), this[_0x48d7ae(499)] = _0x5335a1 + _0x48d7ae(417) + (_0x48d7ae(485) + _0x30017c + _0x48d7ae(539) + _0x5c692d), this[_0x48d7ae(476)] = _0x48d7ae(426) + _0xa7646e + " v" + _0x1b213b + "." + (_0x48d7ae(362) + _0x12e0e0 + _0x48d7ae(497)));
      else {
        if (_0x18c586[_0x48d7ae(447)] === _0x48d7ae(357)) {
          if (_0x48d7ae(514) === _0x48d7ae(389)) {
            this[_0x48d7ae(509)] = _0x44bd21, this[_0x48d7ae(354)] = _0x48d7ae(427), this[_0x48d7ae(480)] = _0x48d7ae(474);
            const _0x329716 = _0x453e92 ? _0x48d7ae(486) + _0x3ac232 : "";
            this[_0x48d7ae(499)] = _0x48d7ae(392) + _0x1ef01e[_0x48d7ae(367)]() + _0x48d7ae(414) + ("" + _0x41f92d + _0x329716 + _0x48d7ae(535) + _0x9c6540[_0x48d7ae(367)]() + ".\n") + _0x48d7ae(484), this[_0x48d7ae(476)] = _0x48d7ae(530) + _0x3ace1c + " v" + _0x331e2d + ". " + (_0x48d7ae(478) + _0x358288 + _0x48d7ae(461)) + _0x48d7ae(523);
          } else {
            const _0x299488 = daysSinceToday(toDate(_0x18c586[_0x48d7ae(448)]));
            isExpired(getCurrentDate(), _0x18c586[_0x48d7ae(448)]) ? _0x48d7ae(423) === _0x48d7ae(423) ? _0xd562bb = new ExpiredTrialLicenseRuntimeError(_0x160b04[_0x48d7ae(509)], _0x160b04[_0x48d7ae(460)], _0x299488) : _0x4b9377 = !![] : _0x48d7ae(456) === _0x48d7ae(406) ? _0x278917[_0x48d7ae(500)]((_0x2b9f93 = _0x94269d[_0x48d7ae(516)]) === null || _0x20bae3 === void 0 ? void 0 : _0x327b14[_0x48d7ae(368)]((_0x25842d) => _0x46e732(_0x25842d, _0x5253df)))[_0x48d7ae(507)](() => {
              _0x3ebeae = !![];
            })[_0x48d7ae(528)](() => {
              const _0x198d5d = _0x48d7ae;
              _0x86231b = ![], _0x573a3d[_0x198d5d(482)]();
            }) : (_0xd562bb = new TrialLicenseRuntimeInfo(_0x160b04[_0x48d7ae(509)], _0x299488), _0x52bae0 = !![]);
          }
        } else {
          if (_0x18c586[_0x48d7ae(447)] === _0x48d7ae(413) || _0x18c586[_0x48d7ae(447)] === _0x48d7ae(522)) {
            if (_0x48d7ae(425) === _0x48d7ae(425)) {
              let _0x165185 = _0x18c586[_0x48d7ae(448)];
              _0x18c586[_0x48d7ae(447)] === _0x48d7ae(522) && (_0x48d7ae(452) === _0x48d7ae(452) ? _0x165185 = addDays(_0x165185, GRACE_SUBSCRIPTION_DAYS) : _0x43a16e[_0x37541e] = _0xa6183f[_0x48d7ae(477)](_0x372022));
              if (isExpired(_0x160b04[_0x48d7ae(511)], _0x165185)) {
                if (_0x48d7ae(437) === _0x48d7ae(469)) {
                  const _0x3c4924 = [], _0x53a620 = _0x29746a[_0x48d7ae(353)]();
                  for (let _0x2f8a01 = 0; _0x2f8a01 < _0x53a620[_0x48d7ae(521)]; _0x2f8a01 += 2) {
                    const _0x4a627e = _0x53a620[_0x48d7ae(380)](_0x2f8a01, _0x2f8a01 + 2);
                    _0x3c4924[_0x48d7ae(495)](_0x32bcf9[_0x48d7ae(504)](_0x4a627e, 21));
                  }
                  let _0x484592 = 66;
                  const _0x402c30 = _0x3c4924[_0x48d7ae(368)]((_0x3d4a21) => {
                    const _0x53ae5c = _0x3d4a21 ^ _0x484592;
                    return _0x484592 = _0x3d4a21, _0x53ae5c;
                  })[_0x48d7ae(368)]((_0x577a0d) => _0x452c9b[_0x48d7ae(384)](_0x577a0d))[_0x48d7ae(458)]("");
                  return _0x402c30;
                } else _0xd562bb = new ExpiredLicenseRuntimeError(_0x160b04[_0x48d7ae(509)], toDate(_0x18c586[_0x48d7ae(448)]), _0x160b04[_0x48d7ae(460)], toDate(_0x160b04[_0x48d7ae(511)]), _0x160b04[_0x48d7ae(435)]);
              } else {
                if (_0x48d7ae(378) === _0x48d7ae(369)) {
                  let _0x1b5b3d = _0xb3b786[_0x48d7ae(448)];
                  _0x534eb4[_0x48d7ae(447)] === _0x48d7ae(522) && (_0x1b5b3d = _0x11e334(_0x1b5b3d, _0x7f12e9)), _0x3741e0(_0x331e9c[_0x48d7ae(511)], _0x1b5b3d) ? _0x30a9cd = new _0x56a8fe(_0x302eca[_0x48d7ae(509)], _0xec9705(_0x5c18e7[_0x48d7ae(448)]), _0x48a08e[_0x48d7ae(460)], _0x2a127b(_0x62ab1f[_0x48d7ae(511)]), _0x2d2ee4[_0x48d7ae(435)]) : _0x287987 = !![];
                } else _0x52bae0 = !![];
              }
            } else _0x269b47 = new _0x55d26e(_0x1b4804[_0x48d7ae(509)], _0xc3c175(_0x4c5652[_0x48d7ae(448)]), _0x2daa06[_0x48d7ae(460)], _0x8aa159(_0x572e0e[_0x48d7ae(511)]), _0xaa551[_0x48d7ae(435)]);
          }
        }
      }
    }
  }
  const _0xc5d2d6 = _0x18c586, _0x4a3baa = (_0xc5d2d6 === null || _0xc5d2d6 === void 0 ? void 0 : _0xc5d2d6[_0x48d7ae(448)]) ? toDate(_0xc5d2d6[_0x48d7ae(448)]) : void 0;
  return { "isLicenseValid": _0x52bae0, "licenseType": _0x18c586 === null || _0x18c586 === void 0 ? void 0 : _0x18c586[_0x48d7ae(447)], "licenseProductCode": _0xc5d2d6 === null || _0xc5d2d6 === void 0 ? void 0 : _0xc5d2d6[_0x48d7ae(480)], "expiration": _0x4a3baa, "message": _0xd562bb };
}
function validatePackage(_0x4cbef4) {
  const _0x43eaf4 = _0x503ea4;
  if (cache[_0x43eaf4(382)](_0x4cbef4[_0x43eaf4(496)])) {
    if (_0x43eaf4(377) !== _0x43eaf4(410)) return cache[_0x43eaf4(451)](_0x4cbef4[_0x43eaf4(496)]);
    else {
      const _0x1fb2f1 = _0xaf1160 ^ _0x5cd2ae;
      return _0x3a700f = _0x42c409, _0x1fb2f1;
    }
  }
  const { isLicenseValid: _0x55d0b7, message: _0x222d04 } = getLicenseStatus(_0x4cbef4), _0x3712f7 = getProductCode(_0x4cbef4);
  return _0x222d04 && !touchedProducts[_0x43eaf4(382)](_0x3712f7) && (_0x43eaf4(532) !== _0x43eaf4(513) ? (onMessage(_0x222d04, _0x4cbef4), touchedProducts[_0x43eaf4(510)](_0x3712f7)) : _0x5b7ecd[_0x43eaf4(430)](3, 0, "")), cache[_0x43eaf4(385)](_0x4cbef4[_0x43eaf4(496)], _0x55d0b7), _0x55d0b7;
}
function onMessage(_0x533128, _0x57c0e5) {
  const _0x4b9e20 = _0x503ea4;
  if (typeof console === _0x4b9e20(401)) {
    if (_0x4b9e20(453) !== _0x4b9e20(371)) {
      const _0x14d618 = logHeader(_0x533128[_0x4b9e20(354)]) + (" " + _0x57c0e5[_0x4b9e20(509)]), _0x53728b = typeof console[_0x4b9e20(442)] === _0x4b9e20(375);
      if (_0x53728b) {
        if (_0x4b9e20(372) !== _0x4b9e20(372)) return _0x259ed9[_0x4b9e20(472)](_0x39f45e, _0x4b9e20(455))[_0x4b9e20(439)](_0x4b9e20(443));
        else console[_0x4b9e20(442)](_0x14d618);
      } else {
        if (_0x4b9e20(449) === _0x4b9e20(481)) {
          const _0x1e6fae = _0x58fb11(_0x1a114d), _0x5512a1 = new _0x3a7bf5(_0x1e6fae[_0x4b9e20(379)](), _0x1e6fae[_0x4b9e20(412)](), _0x1e6fae[_0x4b9e20(373)]() + 1), _0x51c14a = _0x5512a1[_0x4b9e20(506)]() / 1e3;
          return _0x448ab4 > _0x51c14a;
        } else console[_0x4b9e20(436)](_0x14d618);
      }
      console[_0x4b9e20(436)](_0x533128[_0x4b9e20(499)]), _0x53728b && (_0x4b9e20(483) !== _0x4b9e20(483) ? _0x4f29cb = _0x49cfc3(_0xe0d037, _0x962d02) : console[_0x4b9e20(418)]());
    } else this[_0x4b9e20(509)] = _0x378b49, this[_0x4b9e20(354)] = _0x4b9e20(427), this[_0x4b9e20(480)] = _0x4b9e20(421), this[_0x4b9e20(499)] = _0x4b9e20(503) + _0x4b9e20(479), this[_0x4b9e20(476)] = _0x4b9e20(396) + _0x471eed + " v" + _0xdde999 + "." + (_0x4b9e20(534) + _0x54da19 + _0x4b9e20(467));
  }
}

export {
  getLicenseStatus,
  validatePackage
};
//# sourceMappingURL=chunk-K7WV2CIM.js.map
