// www.codewars.com/kata//5572f7c346eb58ae9c000047

    function pattern(n){
        let output = "";
        for (let i = 1; i <= n; i++) {
            output += String(i).repeat(i) + '\n';
        }
        return output.slice(0, -1);
    }
