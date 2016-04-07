(function() {
    window.WallTime || (window.WallTime = {});
    window.WallTime.data = {
        rules: {"Iraq":[{"name":"Iraq","_from":"1982","_to":"only","type":"-","in":"May","on":"1","at":"0:00","_save":"1:00","letter":"D"},{"name":"Iraq","_from":"1982","_to":"1984","type":"-","in":"Oct","on":"1","at":"0:00","_save":"0","letter":"S"},{"name":"Iraq","_from":"1983","_to":"only","type":"-","in":"Mar","on":"31","at":"0:00","_save":"1:00","letter":"D"},{"name":"Iraq","_from":"1984","_to":"1985","type":"-","in":"Apr","on":"1","at":"0:00","_save":"1:00","letter":"D"},{"name":"Iraq","_from":"1985","_to":"1990","type":"-","in":"Sep","on":"lastSun","at":"1:00s","_save":"0","letter":"S"},{"name":"Iraq","_from":"1986","_to":"1990","type":"-","in":"Mar","on":"lastSun","at":"1:00s","_save":"1:00","letter":"D"},{"name":"Iraq","_from":"1991","_to":"2007","type":"-","in":"Apr","on":"1","at":"3:00s","_save":"1:00","letter":"D"},{"name":"Iraq","_from":"1991","_to":"2007","type":"-","in":"Oct","on":"1","at":"3:00s","_save":"0","letter":"S"}]},
        zones: {"Asia/Baghdad":[{"name":"Asia/Baghdad","_offset":"2:57:40","_rule":"-","format":"LMT","_until":"1890"},{"name":"Asia/Baghdad","_offset":"2:57:36","_rule":"-","format":"BMT","_until":"1918"},{"name":"Asia/Baghdad","_offset":"3:00","_rule":"-","format":"AST","_until":"1982 May"},{"name":"Asia/Baghdad","_offset":"3:00","_rule":"Iraq","format":"A%sT","_until":""}]}
    };
    window.WallTime.autoinit = true;
}).call(this);
