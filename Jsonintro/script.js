//__________Copy by value :________
var a= 30;
var b= 40;
console.log(a,b); 

//output 30,40

b=a;
a=50;
console.log(a,b); 

//output 50, 30

//__________Copy by Refernce :________
var arr= [1,2,3];
var arr1= arr;
console.log(arr);
console.log(arr1);

/* Output:
[ 1, 2, 3 ]
[ 1, 2, 3 ]
[ 23, 2, 3 ] */

//--------------------

var arr= [1,2,3];
var arr1= arr;
arr1[0]=23;
console.log(arr);

/* Output:
[ 23, 2, 3 ]*/

//_______________________________________________________________________________________________
                //JSON

var obj={
    "name":"John Doe",
    "year":"2022",
    "attendance":"[mon.tue]"
};
console.log( obj.name);
/* Output:
John Doe */

for( var i in obj)
 {
  console.log(i,obj[i]);
  }
  
 /* Output:
name John Doe
year 2022
attendance [mon,tue]
*/

//---------------------------- Array of JSON objects----------------------------
var array=[
    {
      
      "id": 1,
      "name":"Ria",
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "year":"2020"
    },
    {
      "id": 2,
      "name":"Meera",
      "title": "qui est esse", 
      "year":"2021"
    },
    {
      "id": 3,
      "name":"Sheena",
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "year":"2022"
      
    },
    {
      "id": 4,
      "name":"Rheka",
      "title": "eum et est occaecati",
      "year":"2023"
    },
    {
      "id": 5,
      "name":"Mahima",
      "title": "nesciunt quas odio",
      "year":"2024"
    }
];


 //----- printing specific array of object:-------
 
 console.log(array[0].id);
 console.log(array[0].name);
 console.log(array[0].year);
 
 /*Output:
 1
 Ria
 2020
 */
 
 console.log(array[1].id,array[1].name,array[1].year);
 /*Output
 2 'Meera' '2021'*/
 
 console.log(array[3]["name"]);
 /*Output
 Rheka
 */
 
 //--------printing all the data:---------
 
  for (var i in array)
  {
 console.log(i,array[i]);
 }
 
 /*Output:
 0 { id: 1,
   name: 'Ria',
   title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
   year: '2020' }
 1 { id: 2, name: 'Meera', title: 'qui est esse', year: '2021' }
 2 { id: 3,
   name: 'Sheena',
   title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
   year: '2022' }
 3 { id: 4,
   name: 'Rheka',
   title: 'eum et est occaecati',
   year: '2023' }
 4 { id: 5,
   name: 'Mahima',
   title: 'nesciunt quas odio',
   year: '2024' }
   */

   //------------------Printing all the year in array using for loop :   -----------------
  for (var i =0;i<array.length;i++)
  {
  console.log(array[i].year);
  }

  /*Output:
2020
2021
2022
2023
2024 */

//--------Printing the specific key and value together of all the arrays: ------------------------

for (var i =0;i<array.length;i++)
{
console.log("id:"+array[i].id,"name:"+array[i].name,"year:"+array[i].year);
}


/*Output: 
id:1 name:Ria year:2020
id:2 name:Meera year:2021
id:3 name:Sheena year:2022
id:4 name:Rheka year:2023
id:5 name:Mahima year:2024
*/
    //----------printing the key and value using trmplate literals:
 
    for (var i =0;i<array.length;i++)
    {
    console.log(`id: ${array[i].id}
    name: ${array[i].name}`
    );
    }

    /*Output:
id: 1
  name: Ria
id: 2
  name: Meera
id: 3
  name: Sheena
id: 4
  name: Rheka
id: 5
  name: Mahima
  */