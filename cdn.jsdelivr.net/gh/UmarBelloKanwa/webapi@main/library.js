const _0x10ba9e = _0x38cb;

function _0x1ccf() {
    const _0x47bc61 = ['openDatabase', '3956547NEvKjH', 'Object\x20store\x20', 'operate', 'play', 'lastStore', 'copy', 'share', 'src', '2292zzOIVG', '\x20is\x20being\x20upgraded.', '6425210EapGdq', 'Shared', 'click', 'continue', 'version', 'getUserMedia', 'body', '7IbZvkl', 'mediaRecorder', 'onsuccess', 'openCursor', 'undefined', 'objectStoreNames', 'complete', 'Downloaded\x20file\x20', 'target', 'close', 'error', 'state', 'put', 'pause', 'onerror', 'Error\x20accessing\x20microphone:\x20', 'create', 'add', 'contains', 'dataBase', 'actions', 'display', 'webkitAudioContext', 'Invalid\x20operation', 'download', '145208qYVIOF', 'run', 'delete', 'frequencyBinCount', 'resume', 'transaction', 'copied', 'href', 'getTracks', '\x20already\x20exists.', 'connect', 'Notification', 'Database\x20version', 'recording', 'log', '7290930KVweNQ', 'stream', 'fftSize', 'readwrite', 'stop', 'enableWindowClickHook', '\x20database', 'deleteDb', 'turnVoiceRecord', '81CkRMUC', 'Failed\x20to\x20copy\x20the\x20text', 'Error\x20accessing\x20database:', '537798LmLWJB', 'then', 'slice', 'chunks', 'success', 'dbName', 'createElement', 'appendChild', 'createObjectURL', '\x20does\x20not\x20exist.', '3461048cuyMOo', 'result', 'length', 'Transaction\x20error:', 'dbVersion', 'head', 'createAnalyser', 'AudioContext', 'value', 'english', 'writeText', 'notify', 'deleteObjectStore', 'addEventListener', 'update', 'setTimeout', 'start', 'clipboard', '698nQdoYw', 'push', 'male'];
    _0x1ccf = function() {
        return _0x47bc61;
    };
    return _0x1ccf();
}(function(_0xf0f654, _0x7aa333) {
    const _0x1248c2 = _0x38cb,
        _0x307fc7 = _0xf0f654();
    while (!![]) {
        try {
            const _0x175b9b = -parseInt(_0x1248c2(0x1a1)) / 0x1 * (parseInt(_0x1248c2(0x195)) / 0x2) + -parseInt(_0x1248c2(0x199)) / 0x3 + parseInt(_0x1248c2(0x183)) / 0x4 + parseInt(_0x1248c2(0x16d)) / 0x5 + parseInt(_0x1248c2(0x179)) / 0x6 * (parseInt(_0x1248c2(0x1aa)) / 0x7) + parseInt(_0x1248c2(0x1c3)) / 0x8 * (-parseInt(_0x1248c2(0x176)) / 0x9) + parseInt(_0x1248c2(0x1a3)) / 0xa;
            if (_0x175b9b === _0x7aa333) break;
            else _0x307fc7['push'](_0x307fc7['shift']());
        } catch (_0x5f3a67) {
            _0x307fc7['push'](_0x307fc7['shift']());
        }
    }
}(_0x1ccf, 0xbcd6e));
export class Storage {
    constructor(_0x3771c9) {
        const _0x1b2953 = _0x38cb;
        window[_0x3771c9] = class {
            constructor() {
                const _0x4e5220 = _0x38cb;
                this[_0x4e5220(0x17e)] = _0x3771c9, this[_0x4e5220(0x1bd)] = null, this['lastStore'] = null;
            }[_0x1b2953(0x198)](_0x17246b, _0x1b7d32) {
                return new Promise((_0x43ee19, _0x504335) => {
                    const _0x45310b = _0x38cb;
                    try {
                        this[_0x45310b(0x1bd)] ? .[_0x45310b(0x1b3)]();
                        let _0x40ee9a;
                        const _0x56fd14 = (this[_0x45310b(0x1bd)] ? .[_0x45310b(0x1a7)] || 0x0) + 0x1;
                        _0x40ee9a = _0x17246b == _0x45310b(0x1c4) ? indexedDB['open'](this[_0x45310b(0x17e)]) : indexedDB['open'](this['dbName'], _0x56fd14), _0x40ee9a[_0x45310b(0x190)]('upgradeneeded', _0x1d5986 => {
                            const _0x3b46e2 = _0x45310b;
                            this['dataBase'] = _0x1d5986[_0x3b46e2(0x1b2)][_0x3b46e2(0x184)];
                            switch (_0x17246b) {
                                case _0x3b46e2(0x1ba):
                                case _0x3b46e2(0x191):
                                    if (!this['dataBase']['objectStoreNames'][_0x3b46e2(0x1bc)](_0x1b7d32)) this['dataBase']['createObjectStore'](_0x1b7d32, {
                                        'keyPath': 'id',
                                        'autoIncrement': !![]
                                    }), console[_0x3b46e2(0x16c)](_0x3b46e2(0x19a) + _0x1b7d32 + '\x20created.');
                                    else console[_0x3b46e2(0x16c)]('Object\x20store\x20' + _0x1b7d32 + _0x3b46e2(0x167));
                                    break;
                                case _0x3b46e2(0x1c5):
                                    if (this[_0x3b46e2(0x1bd)][_0x3b46e2(0x1af)][_0x3b46e2(0x1bc)](_0x1b7d32)) this[_0x3b46e2(0x1bd)][_0x3b46e2(0x18f)](_0x1b7d32), console[_0x3b46e2(0x16c)](_0x3b46e2(0x19a) + _0x1b7d32 + '\x20deleted.');
                                    else console['log'](_0x3b46e2(0x19a) + _0x1b7d32 + _0x3b46e2(0x182));
                                    break;
                            }
                            console[_0x3b46e2(0x16c)]('Database\x20' + this['dbName'] + _0x3b46e2(0x1a2));
                        }), _0x40ee9a[_0x45310b(0x190)](_0x45310b(0x17d), _0x48ff12 => {
                            const _0x1ffb84 = _0x45310b;
                            this[_0x1ffb84(0x1bd)] = _0x48ff12[_0x1ffb84(0x1b2)][_0x1ffb84(0x184)], this[_0x1ffb84(0x187)] = _0x48ff12['newVersion'], _0x43ee19(this[_0x1ffb84(0x1bd)]);
                        }), _0x40ee9a[_0x45310b(0x190)](_0x45310b(0x1b4), _0x27cf8a => {
                            const _0x38c114 = _0x45310b;
                            console['error']('Error\x20updating\x20database\x20version:\x20' + _0x27cf8a[_0x38c114(0x1b2)][_0x38c114(0x1b4)]), _0x504335(_0x27cf8a[_0x38c114(0x1b2)][_0x38c114(0x1b4)]);
                        }), this[_0x45310b(0x19d)] = this[_0x45310b(0x1bd)] && this['dataBase'][_0x45310b(0x1af)][_0x45310b(0x185)] > 0x0 ? this[_0x45310b(0x1bd)][_0x45310b(0x1af)][this['dataBase']['objectStoreNames'][_0x45310b(0x185)] - 0x1] : null;
                    } catch (_0x514cd7) {
                        console[_0x45310b(0x1b4)](_0x45310b(0x178), _0x514cd7), _0x504335(_0x514cd7);
                    }
                });
            }[_0x1b2953(0x174)](_0x29a174) {
                return new Promise((_0x4ab846, _0x36ee82) => {
                    const _0x4548cd = _0x38cb;
                    try {
                        const _0x5ad0a1 = indexedDB['deleteDatabase'](_0x29a174);
                        _0x5ad0a1[_0x4548cd(0x1ac)] = () => _0x4ab846(), _0x5ad0a1['onerror'] = () => _0x36ee82('Error\x20deleting\x20' + _0x29a174 + _0x4548cd(0x173));
                    } catch (_0x297667) {
                        _0x36ee82(_0x297667);
                    }
                });
            }
            async [_0x1b2953(0x19b)](_0x263e0d, _0x1b0d0f, _0x40cd23 = '') {
                const _0x23e17c = _0x1b2953;
                return (!this[_0x23e17c(0x1bd)] || !this[_0x23e17c(0x1bd)]['objectStoreNames'][_0x23e17c(0x1bc)](_0x1b0d0f)) && await this[_0x23e17c(0x198)](_0x263e0d === 'display' ? _0x23e17c(0x1c4) : _0x23e17c(0x191), _0x1b0d0f), new Promise((_0x32233f, _0x1a8799) => {
                    const _0x3140b6 = _0x23e17c;
                    console[_0x3140b6(0x16c)](_0x3140b6(0x16a), this[_0x3140b6(0x1bd)][_0x3140b6(0x1a7)]);
                    if (_0x263e0d === _0x3140b6(0x1bf) && !this[_0x3140b6(0x1bd)]['objectStoreNames'][_0x3140b6(0x1bc)](_0x1b0d0f)) _0x32233f([]);
                    const _0x2b1e7c = this[_0x3140b6(0x1bd)][_0x3140b6(0x163)]([_0x1b0d0f], _0x3140b6(0x170)),
                        _0x167d28 = _0x2b1e7c['objectStore'](_0x1b0d0f);
                    _0x2b1e7c[_0x3140b6(0x190)](_0x3140b6(0x1b0), () => {
                        _0x32233f();
                    }), _0x2b1e7c['addEventListener'](_0x3140b6(0x1b4), _0x5bbc32 => {
                        const _0x1f774b = _0x3140b6;
                        _0x1a8799(_0x5bbc32[_0x1f774b(0x1b2)][_0x1f774b(0x1b4)]);
                    }), _0x2b1e7c[_0x3140b6(0x190)](_0x3140b6(0x1b4), _0x4fbfb8 => {
                        const _0x3b9283 = _0x3140b6;
                        console[_0x3b9283(0x1b4)](_0x3b9283(0x186), _0x4fbfb8[_0x3b9283(0x1b2)][_0x3b9283(0x1b4)]), _0x1a8799(_0x4fbfb8[_0x3b9283(0x1b2)][_0x3b9283(0x1b4)]);
                    });
                    switch (_0x263e0d) {
                        case _0x3140b6(0x1bb):
                            const _0x5b3350 = _0x167d28[_0x3140b6(0x1bb)](_0x40cd23);
                            _0x5b3350[_0x3140b6(0x1ac)] = _0x495156 => _0x32233f(_0x495156[_0x3140b6(0x1b2)]['result']);
                            break;
                        case _0x3140b6(0x191):
                            const _0x30c26f = _0x167d28[_0x3140b6(0x1b6)](_0x40cd23);
                            _0x30c26f[_0x3140b6(0x1ac)] = _0x5f4c37 => _0x32233f(_0x5f4c37['target'][_0x3140b6(0x184)]);
                            break;
                        case _0x3140b6(0x1c5):
                            const _0x25165c = _0x167d28['delete'](_0x40cd23);
                            _0x25165c[_0x3140b6(0x1ac)] = () => _0x32233f();
                            break;
                        case _0x3140b6(0x1bf):
                            let _0x2c6d24 = [];
                            const _0x38e474 = _0x167d28[_0x3140b6(0x1ad)]();
                            _0x38e474[_0x3140b6(0x1ac)] = _0x2ce6f2 => {
                                const _0x2692c7 = _0x3140b6,
                                    _0x316c13 = _0x2ce6f2[_0x2692c7(0x1b2)][_0x2692c7(0x184)];
                                _0x316c13 ? (_0x2c6d24['push'](_0x316c13[_0x2692c7(0x18b)]), _0x316c13[_0x2692c7(0x1a6)]()) : _0x32233f(_0x2c6d24);
                            }, _0x38e474[_0x3140b6(0x1b8)] = _0xa9f8c7 => _0x1a8799(_0xa9f8c7[_0x3140b6(0x1b2)][_0x3140b6(0x1b4)]);
                            break;
                        default:
                            _0x1a8799(new Error(_0x3140b6(0x1c1)));
                    }
                });
            }
        };
    }
}
export class Actions {
    constructor() {
        const _0x172bcb = _0x38cb,
            _0x2b80ba = document[_0x172bcb(0x17f)]('script');
        _0x2b80ba[_0x172bcb(0x1a0)] = 'https://code.responsivevoice.org/responsivevoice.js?key=tyx4tT4l', document[_0x172bcb(0x188)][_0x172bcb(0x180)](_0x2b80ba), setTimeout(() => {
            const _0x1d842e = _0x172bcb;
            responsiveVoice[_0x1d842e(0x172)]();
        }, 0xbb8);
    }['speak'](_0x504f16 = _0x10ba9e(0x19c), _0x57177d = '', _0x3c4169 = _0x10ba9e(0x18c), _0x10f1ae = _0x10ba9e(0x197)) {
        const _0x5e21 = _0x10ba9e;
        switch (_0x504f16) {
            case _0x5e21(0x19c):
                responsiveVoice['speak'](_0x57177d, _0x3c4169 + '\x20' + _0x10f1ae, {
                    'language': _0x3c4169
                });
                break;
            case 'pause':
                responsiveVoice[_0x5e21(0x1b7)]();
                break;
            case _0x5e21(0x162):
                responsiveVoice[_0x5e21(0x162)]();
                break;
            case 'cancel':
                responsiveVoice['cancel']();
                break;
        }
    }[_0x10ba9e(0x18e)](_0x149414) {
        const _0xc39bef = _0x10ba9e;
        if (_0xc39bef(0x169) in window) {
            Notification['requestPermission']()[_0xc39bef(0x17a)](_0x563d77 => void new Notification(_0x149414));
            return;
        }
        const _0x282165 = document[_0xc39bef(0x17f)]('alert');
        _0x282165['textContent'] = _0x149414, _0x282165['style'] = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:absolute;\x20bottom:11vh;\x20left:50%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:translate(-50%,\x200%);\x20z-index:7;\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:0\x200\x201.5vw\x200\x20var(--txt),\x20\x200\x200\x205vw\x200\x20black;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:fit-content;\x20height:auto;\x20text-align:center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:rgba(255,\x20255,\x20255,\x201);\x20color:black;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:2em;\x20padding:1em;', document[_0xc39bef(0x1a9)][_0xc39bef(0x180)](_0x282165), window[_0xc39bef(0x192)](() => document['body']['removeChild'](_0x282165), 0xd07);
    }[_0x10ba9e(0x1be)](_0x1e55f5, _0x4c85cc) {
        const _0x385f00 = _0x10ba9e;
        switch (_0x1e55f5) {
            case 'notify':
                this[_0x385f00(0x18e)](_0x4c85cc);
                break;
            case _0x385f00(0x19e):
                if (navigator[_0x385f00(0x194)] != _0x385f00(0x1ae)) navigator['clipboard'][_0x385f00(0x18d)](_0x4c85cc), this[_0x385f00(0x18e)](_0x385f00(0x164));
                else notify(_0x385f00(0x177));
                break;
            case _0x385f00(0x1c2):
                const _0x569e7c = document['createElement']('a');
                _0x569e7c[_0x385f00(0x165)] = _0x4c85cc, _0x569e7c[_0x385f00(0x165)] = URL[_0x385f00(0x181)](new Blob([_0x4c85cc], {
                    'type': 'text/plain'
                })), _0x569e7c['download'] = _0x4c85cc[_0x385f00(0x17b)](0x0, 0xc), _0x569e7c[_0x385f00(0x1a5)](), this[_0x385f00(0x18e)](_0x385f00(0x1b1) + _0x569e7c['download']);
                break;
            case _0x385f00(0x19f):
                if (navigator[_0x385f00(0x19f)] != _0x385f00(0x1ae)) navigator[_0x385f00(0x19f)]({
                    'title': _0x4c85cc[_0x385f00(0x17b)](0x0, 0xc),
                    'text': _0x4c85cc
                }), this[_0x385f00(0x18e)](_0x385f00(0x1a4));
                else notify('Web\x20Share\x20API\x20is\x20not\x20supported\x20by\x20this\x20browser');
                break;
        }
    }
}

function _0x38cb(_0x12714e, _0x1d22a3) {
    const _0x1ccf4a = _0x1ccf();
    return _0x38cb = function(_0x38cbf9, _0x58364c) {
        _0x38cbf9 = _0x38cbf9 - 0x161;
        let _0x4e3ff5 = _0x1ccf4a[_0x38cbf9];
        return _0x4e3ff5;
    }, _0x38cb(_0x12714e, _0x1d22a3);
}
export class voiceRecord {
    async [_0x10ba9e(0x175)](_0x40fd89) {
        const _0x46849e = _0x10ba9e;
        switch (_0x40fd89) {
            case _0x46849e(0x19c):
                try {
                    this[_0x46849e(0x16e)] = await navigator['mediaDevices'][_0x46849e(0x1a8)]({
                        'audio': !![]
                    });
                    const _0x4df716 = new(window[(_0x46849e(0x18a))] || window[(_0x46849e(0x1c0))])(),
                        _0x118b76 = _0x4df716[_0x46849e(0x189)](),
                        _0x3c3805 = _0x4df716['createMediaStreamSource'](this[_0x46849e(0x16e)]);
                    _0x3c3805[_0x46849e(0x168)](_0x118b76), _0x118b76[_0x46849e(0x16f)] = 0x100;
                    const _0x346619 = new Uint8Array(_0x118b76[_0x46849e(0x161)]);
                    return this[_0x46849e(0x1ab)] = new MediaRecorder(this[_0x46849e(0x16e)]), this[_0x46849e(0x17c)] = [], this['mediaRecorder'][_0x46849e(0x190)]('dataavailable', _0x420ec7 => this[_0x46849e(0x17c)][_0x46849e(0x196)](_0x420ec7['data'])), this[_0x46849e(0x1ab)][_0x46849e(0x193)](), {
                        'stream': this[_0x46849e(0x16e)],
                        'analyser': _0x118b76,
                        'dataArray': _0x346619
                    };
                } catch (_0x2d9923) {
                    return this[_0x46849e(0x1be)](_0x46849e(0x18e), _0x46849e(0x1b9) + _0x2d9923), null;
                }
            case _0x46849e(0x1b7):
                if (this[_0x46849e(0x1ab)] ? .[_0x46849e(0x1b5)] === _0x46849e(0x16b)) this['mediaRecorder'][_0x46849e(0x1b7)]();
                break;
            case _0x46849e(0x171):
                if (this[_0x46849e(0x1ab)] ? .[_0x46849e(0x1b5)]) this[_0x46849e(0x1ab)][_0x46849e(0x171)]();
                if (this['stream']) this[_0x46849e(0x16e)][_0x46849e(0x166)]()['forEach'](_0xed1b80 => _0xed1b80['stop']());
                break;
            case _0x46849e(0x162):
                if (this[_0x46849e(0x1ab)] ? .['state'] === 'paused') this[_0x46849e(0x1ab)][_0x46849e(0x162)]();
                break;
        }
    }
}