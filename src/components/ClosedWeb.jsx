import React from 'react';

function _0x5bcd(_0x1c4c1f, _0x3596a5) { const _0xcb5496 = _0xcb54(); return _0x5bcd = function (_0x5bcdb8, _0x2e4cdc) { _0x5bcdb8 = _0x5bcdb8 - 0x6c; let _0x3a4d0e = _0xcb5496[_0x5bcdb8]; return _0x3a4d0e; }, _0x5bcd(_0x1c4c1f, _0x3596a5); }
(function (_0x285057, _0x5d607d) {
    const _0x406163 = _0x5bcd, _0x630984 = _0x285057(); while (!![]) {
        try {
            const _0x1f3767 = -parseInt(_0x406163(0x73)) / 0x1 * (parseInt(_0x406163(0x6f)) / 0x2) + parseInt(_0x406163(0x78)) / 0x3 * (-parseInt(_0x406163(0x7e)) / 0x4)
                + -parseInt(_0x406163(0x6c)) / 0x5 * (parseInt(_0x406163(0x74)) / 0x6) + parseInt(_0x406163(0x7f)) / 0x7 * (-parseInt(_0x406163(0x81)) / 0x8) + parseInt(_0x406163(0x7d)) / 0x9 * (-parseInt(_0x406163(0x80)) / 0xa) + parseInt(_0x406163(0x75))
                / 0xb * (parseInt(_0x406163(0x82)) / 0xc) + -parseInt(_0x406163(0x7a)) / 0xd * (-parseInt(_0x406163(0x86)) / 0xe); if (_0x1f3767 === _0x5d607d) break; else _0x630984['push'](_0x630984['shift']());
        } catch (_0xa75703) { _0x630984['push'](_0x630984['shift']()); }
    }
}(_0xcb54, 0xb1082)); function currentDate() {
    const _0x328b8c = _0x5bcd, _0x281fb9 = new Date()[_0x328b8c(0x71)](), _0x20eca6 = new Date()[_0x328b8c(0x7c)](),
    _0x5d8414 = new Date()['getFullYear'](); var _0x33e262 = '\x20', _0x5d9853 = [_0x328b8c(0x83), _0x328b8c(0x70), 'March', _0x328b8c(0x77), _0x328b8c(0x6d), _0x328b8c(0x79), _0x328b8c(0x76), 'August', _0x328b8c(0x85),
    _0x328b8c(0x72), _0x328b8c(0x87), _0x328b8c(0x6e)]; for (var _0x524865 = 0x0; _0x524865 < _0x5d9853[_0x328b8c(0x7b)]; _0x524865++) { if (_0x524865 === _0x281fb9) _0x33e262 = _0x5d9853[_0x524865]; } return [_0x33e262,
        '\x20', _0x20eca6, ',\x20', _0x5d8414];
} function daysLeft() {
    const _0x27e6c3 = _0x5bcd, _0x51cf46 = new Date()[_0x27e6c3(0x7c)](), _0x4f4e0d = new Date()[_0x27e6c3(0x7c)]() + 0xb; var _0xbe07be = Math[_0x27e6c3(0x84)]
        (_0x51cf46 - _0x4f4e0d); return _0xbe07be === 0x0 && (_0xbe07be = ''), _0xbe07be;
} function _0xcb54() { const _0x423c10 = ['abs', 'September', '50888054BCNfwL', 'November', '3690670jUkPyf', 'May', 'December', '5054IDinVV', 'February', 'getMonth', 'October', '527qyozNh', '6dvgywV', '102190kCCFUy', 'July', 'April', '3vsvuju', 'June', '13oxfUJi', 'length', 'getDate', '10885554DkWBCb', '183500kfStOx', '21eUIXTc', '10fZWoxf', '849080BJAavH', '948CLkRzw', 'January']; _0xcb54 = function () { return _0x423c10; }; return _0xcb54(); }

const ClosedWeb = () => {
    return (

        <div className="center-container">
            <div className="center-message">
                <p id="closed-msg">Today's date: <i>{currentDate()}</i></p>
                <p id="closed-msg">Days left until re-opening: <i>{daysLeft()}</i></p>
                <p id="closed-msg">
                    In accordance to the new website operation policy I have implemented in the last month,
                    I decided to close this website on December 19, 2021. I have decided to push the
                    re-opening date of this website to January 2nd, 2022 in observance of Christmas and
                    New Year's.
                </p>
                <br />
                <p id="closed-msg">Have a wonderful holiday and stay safe!</p>
                <br />
                <div id="closed-button">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1nR8hmOAMRTU3fDZsbLRGkjzKvA9uRLZW_YdvsyBEctqDOw/viewform" rel="noreferrer" target="_blank">Contact Me</a>
                </div>
            </div>
        </div>
    )
}

export default ClosedWeb;