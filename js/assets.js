const mapPack = [
    [
    // 0    1    2    3    4    5    6    7    8    9    10   11   12   13  14    15   16   17  18   19   20    21  22  23  24      end of column
    [  1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,  1,  1,  1    ], //0
    [  1,   0,   0,   0,   0,   0,   0,   0,   0,   1,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  0,  1,  1    ], //1
    [  1,   1,   1,   10,  1,   1,   1,   1,   0,   1,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  0,  1,  1    ], //2
    [  1,   1,   0,   0,   0,   1,   1,   1,   0,   1,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  0,  1,  1    ], //3
    [  1,   0,   0,   0,   0,   0,   3,   1,   0,   1,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  0,  1,  1    ], //4
    [  1,   0,   0,   0,   0,   0,   0,   1,   0,   1,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  0,  1,  1    ], //5
    [  1,   0,   0,   0,   0,   1,   1,   1,   0,   0,   10,  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  0,  1,  1    ], //6
    [  1,   0,   0,   0,   0,   0,   0,   10,  0,   1,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  0,  1,  1    ], //7
    [  1,   0,   0,   0,   0,   1,   1,   1,   0,   1,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  0,  1,  1    ], //8
    [  1,   0,   0,   0,   0,   0,   4,   1,   0,   1,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  0,  1,  1    ], //9
    [  1,   1,   0,   0,   0,   1,   1,   1,   0,   1,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  0,  1,  1    ], //10
    [  1,   1,   1,   10,  1,   1,   1,   1,   0,   1,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  0,  1,  1    ], //11
    [  1,   0,   0,   0,   0,   0,   0,   1,   0,   1,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,  0,  1,  1    ], //12
    [  1,   0,   0,   0,   0,   0,   0,   1,   0,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   0,   0,   1,  1,  1,  1    ], //13
    [  1,   0,   0,   0,   0,   0,   0,   1,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   1,   0,   0,   1,  1,  1,  1    ], //14
    [  1,   0,   0,   0,   0,   0,   0,   1,   1,   1,   10,  1,   1,   1,   1,   0,   4,   0,   1,   0,   0,   1,  1,  1,  1    ], //15
    [  1,   0,   0,   0,   0,   0,   0,   1,   3,   1,   0,   1,   1,   1,   1,   0,   0,   0,   1,   0,   0,   1,  1,  1,  1    ], //16
    [  1,   0,   0,   0,   0,   0,   0,   1,   0,   1,   0,   1,   1,   1,   1,   1,   1,   1,   1,   0,   0,   1,  1,  1,  1    ], //17
    [  1,   1,   10,  1,   1,   1,   1,   1,   10,  1,   0,   1,   1,   1,   1,   1,   1,   0,   0,   0,   0,   0,  0,  1,  1    ], //18
    [  1,   0,   0,   0,   1,   0,   0,   0,   0,   0,   0,   1,   1,   1,   1,   1,   1,   0,   0,   0,   0,   0,  0,  1,  1    ], //19
    [  1,   0,   0,   0,   1,   0,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   0,   0,   0,   0,   0,  0,  1,  1    ], //20
    [  1,   0,   4,   0,   1,   0,   1,   0,   0,   0,   0,   0,   1,   1,   1,   1,   1,   0,   0,   0,   0,   0,  0,  1,  1    ], //21
    [  1,   0,   0,   0,   1,   0,   1,   0,   0,   0,   0,   0,   1,   1,   1,   1,   1,   0,   0,   0,   0,   0,  0,  1,  1    ], //22
    [  1,   0,   0,   0,   1,   0,   0,   0,   0,   0,   0,   0,   1,   1,   1,   1,   1,   5,   0,   0,   0,   0,  0,  1,  1    ], //23
    [  1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,  1,  1,  1    ]  //24
    ]
]

const randomTreasure = [
    "crumbs", "dog teeth",  "chewing gum(chewed)",
    "A small round coin with a hole in it", 
    "A tiny doll with one eye", 
    "a rag that absorbs any stain", 
    "human skull",
    "A small charm made out of seashells", 
    "20 copper", 
    "A whistle made from a snail shell", 
    "12 silver", 
    "6 gold piece", 
    "Citrine figurine", 
]
