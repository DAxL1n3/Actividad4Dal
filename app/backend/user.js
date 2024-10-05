const users = [
        {
          "identificación": 1,
          "nombre": "Leanne Graham",
          "usuario": "Bret",
          "correo": "Sincere@april.biz",
          "DIRECCIÓN": {
            "calle": "Luz de Kulas",
            "suite": "Apto. 556",
            "ciudad": "Gwenborough",
            "código postal": "92998-3874",
            "geo": {
              "latitud": "-37.3159",
              "lng": "81.1496"
            }
          },
          "teléfono": "1-770-736-8031 x56442",
          "sitio web": "hildegard.org",
          "compañía": {
            "nombre": "Romaguera-Crona",
            "catchPhrase": "Red neuronal cliente-servidor multicapa",
            "bs": "Aproveche los mercados electrónicos en tiempo real"
          }
        },
        {
          "identificación": 2,
          "nombre": "Ervin Howell",
          "usuario": "Antonette",
          "correo": "Shanna@melissa.tv",
          "DIRECCIÓN": {
            "calle": "Victor Plains",
            "suite": "Suite 879",
            "ciudad": "Wisokyburgh",
            "código postal": "90566-7771",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34,4618"
            }
          },
          "teléfono": "010-692-6593 x09125",
          "sitio web": "anastasia.net",
          "compañía": {
            "nombre": "Deckow-Crist",
            "catchPhrase": "Contingencia didáctica proactiva",
            "bs": "sinergizar cadenas de suministro escalables"
          }
        },
        {
          "identificación": 3,
          "nombre": "Clementine Bauch",
          "usuario": "Samantha",
          "correo": "Nathan@yesenia.net",
          "DIRECCIÓN": {
            "calle": "Extensión Douglas",
            "suite": "Suite 847",
            "ciudad": "McKenziehaven",
            "código postal": "59590-4157",
            "geo": {
              "lat": "-68.6102",
              "lng": "-47.0653"
            }
          },
          "teléfono": "1-463-123-4447",
          "sitio web": "ramiro.info",
          "compañía": {
            "nombre": "Romaguera-Jacobson",
            "catchPhrase": "Interfaz bifurcada cara a cara",
            "bs": "habilitar aplicaciones estratégicas"
          }
        },
        {
          "identificación": 4,
          "nombre": "Patricia Lebsack",
          "usuario": "Karianne",
          "correo": "Julianne.OConner@kory.org",
          "DIRECCIÓN": {
            "calle": "Centro comercial Hoeger",
            "suite": "Apto. 692",
            "ciudad": "Elvis del Sur",
            "código postal": "53919-4257",
            "geo": {
              "lat": "29.4572",
              "lng": "-164.2990"
            }
          },
          "teléfono": "493-170-9623 x156",
          "sitio web": "kale.biz",
          "compañía": {
            "nombre": "Robel-Corkery",
            "catchPhrase": "Productividad de tolerancia cero en varios niveles",
            "bs": "transición a servicios web de vanguardia"
          }
        },
        {
          "identificación": 5,
          "nombre": "Chelsey Dietrich",
          "usuario": "Kamren",
          "correo": "Lucio_Hettinger@annie.ca",
          "DIRECCIÓN": {
            "calle": "Paseos en Skiles",
            "suite": "Suite 351",
            "ciudad": "Roscoeview",
            "código postal": "33263",
            "geo": {
              "latitud": "-31.8129",
              "lng": "62,5342"
            }
          },
          "teléfono": "(254)954-1289",
          "sitio web": "demarco.info",
          "compañía": {
            "nombre": "Keebler LLC",
            "catchPhrase": "Solución tolerante a fallos centrada en el usuario",
            "bs": "revolucionar los sistemas de extremo a extremo"
          }
        },
        {
          "identificación": 6,
          "nombre": "Sra. Dennis Schulist",
          "usuario": "Leopoldo_Corkery",
          "correo": "Karley_Dach@jasper.info",
          "DIRECCIÓN": {
            "calle": "Cruce Norberto",
            "suite": "Apto. 950",
            "ciudad": "Christy del Sur",
            "código postal": "23505-1337",
            "geo": {
              "latitud": "-71.4197",
              "lng": "71,7478"
            }
          },
          "teléfono": "1-477-935-8478 x6430",
          "sitio web": "ola.org",
          "compañía": {
            "nombre": "Considina-Lockman",
            "catchPhrase": "Interfaz de línea de base sincronizada",
            "bs": "habilitar aplicaciones innovadoras"
          }
        },
        {
          "identificación": 7,
          "nombre": "Kurtis Weissnat",
          "usuario": "Elwyn.Skiles",
          "correo": "Telly.Hoeger@billy.biz",
          "DIRECCIÓN": {
            "calle": "Rex Trail",
            "suite": "Suite 280",
            "ciudad": "Howemouth",
            "código postal": "58804-1099",
            "geo": {
              "lat": "24.8918",
              "lng": "21.8984"
            }
          },
          "teléfono": "210.067.6132",
          "sitio web": "elvis.io",
          "compañía": {
            "nombre": "Grupo Johns",
            "catchPhrase": "Grupo de trabajo multimedia configurable",
            "bs": "generar e-minoristas empresariales"
          }
        },
        {
          "identificación": 8,
          "nombre": "Nicholas Runolfsdottir V",
          "usuario": "Maxime_Nienow",
          "correo": "Sherwood@rosamond.me",
          "DIRECCIÓN": {
            "calle": "Cumbre de Ellsworth",
            "suite": "Suite 729",
            "ciudad": "Aliyaview",
            "código postal": "45169",
            "geo": {
              "lat": "-14.3990",
              "lng": "-120,7677"
            }
          },
          "teléfono": "586.493.6943 x140",
          "sitio web": "jacynthe.com",
          "compañía": {
            "nombre": "Grupo Abernathy",
            "catchPhrase": "Concepto secundario implementado",
            "bs": "habilitación electrónica para minoristas electrónicos extensibles"
          }
        },
        {
          "identificación": 9,
          "nombre": "Glenna Reichert",
          "usuario": "Delphine",
          "correo": "Chaim_McDermott@dana.io",
          "DIRECCIÓN": {
            "calle": "Parque Dayna",
            "suite": "Suite 449",
            "ciudad": "Bartholomebury",
            "código postal": "76495-3109",
            "geo": {
              "lat": "24.6463",
              "lng": "-168.8889"
            }
          },
          "teléfono": "(775)976-6794 x41206",
          "sitio web": "conrad.com",
          "compañía": {
            "nombre": "Yost and Sons",
            "catchPhrase": "Proyecto contextual conmutable",
            "bs": "tecnologías agregadas en tiempo real"
          }
        },
        {
          "identificación": 10,
          "nombre": "Clementina DuBuque",
          "usuario": "Moriah.Stanton",
          "correo": "Rey.Padberg@karina.biz",
          "DIRECCIÓN": {
            "calle": "Autopista de peaje Kattie",
            "suite": "Suite 198",
            "ciudad": "Lebsackbury",
            "código postal": "31428-2261",
            "geo": {
              "latitud": "-38.2386",
              "lng": "57,2232"
            }
          },
          "teléfono": "024-648-3804",
          "sitio web": "ambrose.net",
          "compañía": {
            "nombre": "Hoeger LLC",
            "catchPhrase": "Grupo de trabajo de empoderamiento centralizado",
            "bs": "modelos objetivo de extremo a extremo"
          }
        }
]

export default users 