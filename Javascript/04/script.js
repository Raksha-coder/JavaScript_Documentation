
//here we have 3 sides of the triangle 
// so we will use heros's formula 

//A = Math.Sqrt of  s(s-a)(s-b)(s-c)

function areaOfTriangle(s1,s2,s3){
    var s = (s1+s2+s3)/2; //perimeter

    var area = Math.sqrt(s * ((s-s1) * (s-s2)*(s-s3)));
    console.log(Math.floor(area));
}

areaOfTriangle(5,5,5);
areaOfTriangle(5,7,9);