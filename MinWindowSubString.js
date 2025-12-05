let sub = function (s, t) {
    if (t.length > s.length) return "";

    let need = {};
    for (let ch of t) {
        need[ch] = (need[ch] || 0) + 1;
    }

    let have = {};
    let required = Object.keys(need).length;
    let formed = 0;

    let left = 0;
    let minLen = Infinity;
    let start = 0;

    for (let right = 0; right < s.length; right++) {
        let ch = s[right];
        have[ch] = (have[ch] || 0) + 1;

        if (have[ch] === need[ch]) {
            formed++;
        }

        // shrink window while valid
        while (formed === required) {
            // update best window
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }

            // remove left char
            let leftChar = s[left];
            have[leftChar]--;
            if (have[leftChar] < need[leftChar]) {
                formed--;
            }
            left++;
        }
    }

    return minLen === Infinity ? "" : s.slice(start, start + minLen);
};

console.log(sub("hello world", "llo"));

