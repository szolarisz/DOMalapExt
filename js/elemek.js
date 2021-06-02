function  megrajzol(){
    for( let sor=1; sor<=3; sor++){
        for( let oszlop=1; oszlop<=3; oszlop++){
            let szoveg = '<div id="r'+sor+'c'+oszlop+'" class="cella">'+(sor+oszlop)+'</div>';
            document.write(szoveg);
        }
    }
}