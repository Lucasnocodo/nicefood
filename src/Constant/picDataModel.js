import { createServer, Model } from "miragejs"

createServer({
    models: {
        pics: Model,
    },

    routes() {
        this.namespace = "api"

        this.get("/pics", () => {
            return picData
        })

        this.get("/movies/:page", (schema, request) => {
            let id = request.params.page

            return schema.pics.find(id)
        })
    },
})
const picData = {
    "total": 100,
    "totalPages": 1,
    "page": 1,
    "pageSize": 100,
    "data": [
        {
            "id": "77dac368-2464-4222-852e-56bda8b33a80",
            "name": "Alda Wunsch",
            "username": "Sim.Grady",
            "avater": "https://cdn.fakercloud.com/avatars/joe_black_128.jpg",
            "isFollowing": false
        },
        {
            "id": "7c39aa71-35e3-4e5d-b681-8dae527f4519",
            "name": "Lolita Towne",
            "username": "Dagmar.Zieme",
            "avater": "https://cdn.fakercloud.com/avatars/noxdzine_128.jpg",
            "isFollowing": false
        },
        {
            "id": "b56975c5-7c9d-4e4c-8eaa-f3154cf5cef9",
            "name": "Kennedy Beahan",
            "username": "Estell46",
            "avater": "https://cdn.fakercloud.com/avatars/matkins_128.jpg",
            "isFollowing": false
        },
        {
            "id": "aeef5ad2-33d4-4ec1-8423-efb348dfa453",
            "name": "Zora Wintheiser",
            "username": "Serenity68",
            "avater": "https://cdn.fakercloud.com/avatars/polarity_128.jpg",
            "isFollowing": true
        },
        {
            "id": "810dc40a-05d3-4c46-b01b-d876b4fbf434",
            "name": "Allene Becker",
            "username": "Nigel.Beier82",
            "avater": "https://cdn.fakercloud.com/avatars/itsajimithing_128.jpg",
            "isFollowing": false
        },
        {
            "id": "3f8a94bb-1c95-4c3c-88e9-0802f1b1c767",
            "name": "Clarissa Schoen",
            "username": "Jermey12",
            "avater": "https://cdn.fakercloud.com/avatars/ratbus_128.jpg",
            "isFollowing": true
        },
        {
            "id": "769411e2-9827-4fb7-bd27-0729d6a79fec",
            "name": "Yvette Green",
            "username": "Hettie_Cronin17",
            "avater": "https://cdn.fakercloud.com/avatars/soyjavi_128.jpg",
            "isFollowing": true
        },
        {
            "id": "b41a6cf7-6163-41ff-8fe5-5e3766bf7c1b",
            "name": "Marcos Mills",
            "username": "Jaren40",
            "avater": "https://cdn.fakercloud.com/avatars/mslarkina_128.jpg",
            "isFollowing": false
        },
        {
            "id": "4199fbd1-54b5-4f86-9c96-da64732534db",
            "name": "Merlin Gorczany",
            "username": "Ernie.Cummerata66",
            "avater": "https://cdn.fakercloud.com/avatars/enda_128.jpg",
            "isFollowing": true
        },
        {
            "id": "408fa1d4-b338-4d40-bf9c-483f13b33927",
            "name": "Kaylie Streich",
            "username": "Harold61",
            "avater": "https://cdn.fakercloud.com/avatars/apriendeau_128.jpg",
            "isFollowing": true
        },
        {
            "id": "936f7f54-05bc-483d-8e7a-0fea13fae289",
            "name": "Esmeralda Buckridge",
            "username": "Deshaun61",
            "avater": "https://cdn.fakercloud.com/avatars/areandacom_128.jpg",
            "isFollowing": false
        },
        {
            "id": "21492245-38e8-4b2f-861d-0acff618caf4",
            "name": "Ubaldo Stokes",
            "username": "Norwood42",
            "avater": "https://cdn.fakercloud.com/avatars/maximseshuk_128.jpg",
            "isFollowing": true
        },
        {
            "id": "478bc113-03ec-4d84-bb2d-65283bbd9dbc",
            "name": "Gloria Moen",
            "username": "Axel80",
            "avater": "https://cdn.fakercloud.com/avatars/bartoszdawydzik_128.jpg",
            "isFollowing": true
        },
        {
            "id": "3ee90edd-2bce-4895-9b84-b5c748f2130b",
            "name": "Gracie Rolfson",
            "username": "Gracie_Predovic82",
            "avater": "https://cdn.fakercloud.com/avatars/stayuber_128.jpg",
            "isFollowing": false
        },
        {
            "id": "82cc8469-f135-48e9-a831-15ea0de1baf1",
            "name": "Porter Will",
            "username": "Izaiah.Dietrich52",
            "avater": "https://cdn.fakercloud.com/avatars/kurafire_128.jpg",
            "isFollowing": true
        },
        {
            "id": "14ad50c8-6093-4f93-b7d8-06427703f935",
            "name": "Tianna Strosin",
            "username": "Nicholaus_Swaniawski45",
            "avater": "https://cdn.fakercloud.com/avatars/amayvs_128.jpg",
            "isFollowing": true
        },
        {
            "id": "46f99695-9f2b-459a-82cb-935379b15cc6",
            "name": "Webster D'Amore",
            "username": "Dave_Hahn59",
            "avater": "https://cdn.fakercloud.com/avatars/ivanfilipovbg_128.jpg",
            "isFollowing": false
        },
        {
            "id": "048f8177-da07-41ba-9d41-7fa9d4d325c8",
            "name": "Alva Brakus",
            "username": "Florence.Macejkovic9",
            "avater": "https://cdn.fakercloud.com/avatars/soyjavi_128.jpg",
            "isFollowing": true
        },
        {
            "id": "16008f23-14e4-46e2-96e0-554e6270fd40",
            "name": "Idella Schulist",
            "username": "Luisa.Hamill96",
            "avater": "https://cdn.fakercloud.com/avatars/vlajki_128.jpg",
            "isFollowing": false
        },
        {
            "id": "f0dcfd1c-0229-4db4-869c-b1c0144897c0",
            "name": "Alda Greenholt",
            "username": "Rosendo62",
            "avater": "https://cdn.fakercloud.com/avatars/miguelkooreman_128.jpg",
            "isFollowing": true
        },
        {
            "id": "01c07560-fbe4-46b9-a3b9-27d99f28e0cc",
            "name": "Mariano Jacobson",
            "username": "Brad_Ondricka10",
            "avater": "https://cdn.fakercloud.com/avatars/sur4dye_128.jpg",
            "isFollowing": true
        },
        {
            "id": "3a0afa36-765b-4c40-8cd1-1fe6a29722ba",
            "name": "Irving Kutch",
            "username": "Anne_Cummerata37",
            "avater": "https://cdn.fakercloud.com/avatars/jervo_128.jpg",
            "isFollowing": true
        },
        {
            "id": "ab1a864d-1a70-4098-8497-d196178b2a7b",
            "name": "Melyna Herman",
            "username": "Javon98",
            "avater": "https://cdn.fakercloud.com/avatars/ryandownie_128.jpg",
            "isFollowing": false
        },
        {
            "id": "a9563625-a35a-4057-acc0-1a02dea93d68",
            "name": "Nathan Sanford",
            "username": "Rosalinda_Bogan",
            "avater": "https://cdn.fakercloud.com/avatars/bungiwan_128.jpg",
            "isFollowing": false
        },
        {
            "id": "c5be869a-cba7-419c-8937-d039e70f8f6b",
            "name": "Bridget Shanahan",
            "username": "Kayli56",
            "avater": "https://cdn.fakercloud.com/avatars/kurafire_128.jpg",
            "isFollowing": true
        },
        {
            "id": "73c2c821-523f-46fe-a962-a37d83db173f",
            "name": "Adolphus Waelchi",
            "username": "Felicita.Thompson19",
            "avater": "https://cdn.fakercloud.com/avatars/gizmeedevil1991_128.jpg",
            "isFollowing": true
        },
        {
            "id": "26c78b1a-1dd1-4407-aeac-95fc1e111270",
            "name": "Phyllis Schumm",
            "username": "Paxton_Heidenreich",
            "avater": "https://cdn.fakercloud.com/avatars/jcubic_128.jpg",
            "isFollowing": false
        },
        {
            "id": "37713dcb-1708-4ad5-8ff3-b36e842da8b0",
            "name": "Xavier Rodriguez",
            "username": "Arnold_Spinka20",
            "avater": "https://cdn.fakercloud.com/avatars/nateschulte_128.jpg",
            "isFollowing": true
        },
        {
            "id": "7dc1c783-6d12-4e5a-94a8-4f6bde75b024",
            "name": "Jessica Kling",
            "username": "Javon67",
            "avater": "https://cdn.fakercloud.com/avatars/mocabyte_128.jpg",
            "isFollowing": false
        },
        {
            "id": "39701c67-8872-4998-83fb-0a1a694e1c24",
            "name": "Montana Marvin",
            "username": "Bettye.Hane",
            "avater": "https://cdn.fakercloud.com/avatars/dzantievm_128.jpg",
            "isFollowing": false
        },
        {
            "id": "48c52d86-c726-498c-bde5-c7518458c0ca",
            "name": "Kolby Prosacco",
            "username": "Brandt.Armstrong",
            "avater": "https://cdn.fakercloud.com/avatars/bereto_128.jpg",
            "isFollowing": false
        },
        {
            "id": "12790582-3fca-4fc8-9ec5-4c69d2b90509",
            "name": "Berniece McDermott",
            "username": "Lee_Conn",
            "avater": "https://cdn.fakercloud.com/avatars/larrygerard_128.jpg",
            "isFollowing": true
        },
        {
            "id": "e969c28e-b99b-49f2-b58f-c971276001ae",
            "name": "Giovani Koepp",
            "username": "Evans91",
            "avater": "https://cdn.fakercloud.com/avatars/ninjad3m0_128.jpg",
            "isFollowing": true
        },
        {
            "id": "5c9c07dc-18a2-4261-9a43-58ece188cd34",
            "name": "Lora Fahey",
            "username": "Laurianne64",
            "avater": "https://cdn.fakercloud.com/avatars/nemanjaivanovic_128.jpg",
            "isFollowing": true
        },
        {
            "id": "70d367c1-b6e2-4125-99d3-bc4c7667134a",
            "name": "Kelley Aufderhar",
            "username": "Gerhard_Dibbert",
            "avater": "https://cdn.fakercloud.com/avatars/okseanjay_128.jpg",
            "isFollowing": true
        },
        {
            "id": "cd8b7a0f-5ece-4322-a1fc-a56a7b1aa14b",
            "name": "Shad Hessel",
            "username": "Grover.Wyman",
            "avater": "https://cdn.fakercloud.com/avatars/dpmachado_128.jpg",
            "isFollowing": true
        },
        {
            "id": "977eb804-fe0a-429b-8c04-d96a2a36fdf8",
            "name": "Easton Borer",
            "username": "Kara.Bradtke68",
            "avater": "https://cdn.fakercloud.com/avatars/theonlyzeke_128.jpg",
            "isFollowing": true
        },
        {
            "id": "34cc3821-9835-4216-a96f-7522ccb0bfbc",
            "name": "Deshaun Johnson",
            "username": "Dangelo22",
            "avater": "https://cdn.fakercloud.com/avatars/pehamondello_128.jpg",
            "isFollowing": true
        },
        {
            "id": "393cfd3e-19a8-4824-bd1e-de1e77c55750",
            "name": "Howell Sporer",
            "username": "Helene79",
            "avater": "https://cdn.fakercloud.com/avatars/n3dmax_128.jpg",
            "isFollowing": false
        },
        {
            "id": "1b18498e-b148-4f62-a726-85247d52d5fb",
            "name": "Jesus Sporer",
            "username": "Werner84",
            "avater": "https://cdn.fakercloud.com/avatars/layerssss_128.jpg",
            "isFollowing": true
        },
        {
            "id": "63cf4f50-fe90-45c9-8454-9f0437be0d42",
            "name": "Elmore Yundt",
            "username": "Rylee.Hintz",
            "avater": "https://cdn.fakercloud.com/avatars/allthingssmitty_128.jpg",
            "isFollowing": true
        },
        {
            "id": "1c312cdc-7b26-4098-827c-341005528904",
            "name": "Asia Hauck",
            "username": "Wilhelm.Okuneva",
            "avater": "https://cdn.fakercloud.com/avatars/mdsisto_128.jpg",
            "isFollowing": true
        },
        {
            "id": "0f276185-dc15-486c-8821-faa1a60ba1fa",
            "name": "Elenora Gerlach",
            "username": "Darrick.Reynolds39",
            "avater": "https://cdn.fakercloud.com/avatars/jonkspr_128.jpg",
            "isFollowing": true
        },
        {
            "id": "e926bad9-5986-43af-a070-adeed1e0bfd8",
            "name": "Ismael Gutkowski",
            "username": "Gerald_Klocko28",
            "avater": "https://cdn.fakercloud.com/avatars/muridrahhal_128.jpg",
            "isFollowing": false
        },
        {
            "id": "0a971448-093f-4e75-861c-1aba3c0dbc9c",
            "name": "Demetris Thompson",
            "username": "Lenna.Zemlak27",
            "avater": "https://cdn.fakercloud.com/avatars/iamjdeleon_128.jpg",
            "isFollowing": true
        },
        {
            "id": "81fb4ff1-1433-4264-aeb9-c9fd4b0df844",
            "name": "Gideon Moore",
            "username": "Hettie_Hyatt77",
            "avater": "https://cdn.fakercloud.com/avatars/gregrwilkinson_128.jpg",
            "isFollowing": false
        },
        {
            "id": "01e04cf5-3c1a-4187-bf58-43e4a2467ed2",
            "name": "Phyllis Gorczany",
            "username": "Valerie.Predovic",
            "avater": "https://cdn.fakercloud.com/avatars/ntfblog_128.jpg",
            "isFollowing": true
        },
        {
            "id": "5b701413-8d80-48db-a308-ede33869b1c9",
            "name": "Felton Goodwin",
            "username": "Lew_Ritchie31",
            "avater": "https://cdn.fakercloud.com/avatars/newbrushes_128.jpg",
            "isFollowing": true
        },
        {
            "id": "13cf1013-54a0-4abd-9592-cca2da46d171",
            "name": "Alta Crooks",
            "username": "Vance.Gerlach68",
            "avater": "https://cdn.fakercloud.com/avatars/boxmodel_128.jpg",
            "isFollowing": false
        },
        {
            "id": "c73c2792-ebcf-4f0a-b6d6-1413f1728d4d",
            "name": "Emmalee Marvin",
            "username": "Bruce58",
            "avater": "https://cdn.fakercloud.com/avatars/saulihirvi_128.jpg",
            "isFollowing": true
        },
        {
            "id": "722c7cb6-fecf-450a-84e7-7a00d8ae26fe",
            "name": "General Osinski",
            "username": "Andres12",
            "avater": "https://cdn.fakercloud.com/avatars/souperphly_128.jpg",
            "isFollowing": false
        },
        {
            "id": "cb548abc-2296-4b6d-a2ca-7406506c33f9",
            "name": "Zachery VonRueden",
            "username": "Velva.Rau25",
            "avater": "https://cdn.fakercloud.com/avatars/amandabuzard_128.jpg",
            "isFollowing": true
        },
        {
            "id": "c0d0f4a7-b1a1-4637-994e-ab688fdca471",
            "name": "Nicholaus Homenick",
            "username": "Katrine_Howell99",
            "avater": "https://cdn.fakercloud.com/avatars/alecarpentier_128.jpg",
            "isFollowing": true
        },
        {
            "id": "4235f2b5-a369-4ba7-8ab8-e4141abf7d8b",
            "name": "Cassandre Ratke",
            "username": "Roscoe84",
            "avater": "https://cdn.fakercloud.com/avatars/hoangloi_128.jpg",
            "isFollowing": true
        },
        {
            "id": "7cea174a-5dd8-4b96-b42b-7f3f5fee5b36",
            "name": "Jason Haag",
            "username": "Angelica91",
            "avater": "https://cdn.fakercloud.com/avatars/llun_128.jpg",
            "isFollowing": false
        },
        {
            "id": "649747f4-5fc7-49cc-a3f8-6752f429542a",
            "name": "Flossie Erdman",
            "username": "Reid.Sauer56",
            "avater": "https://cdn.fakercloud.com/avatars/nerdgr8_128.jpg",
            "isFollowing": false
        },
        {
            "id": "48cd4d30-25c4-47dc-a107-95f9c774071b",
            "name": "Shaylee Crona",
            "username": "Lola_MacGyver28",
            "avater": "https://cdn.fakercloud.com/avatars/_ragzor_128.jpg",
            "isFollowing": true
        },
        {
            "id": "5296b1cb-4902-401e-a4f7-565cd3db6a85",
            "name": "Friedrich Bode",
            "username": "Jana94",
            "avater": "https://cdn.fakercloud.com/avatars/mr_shiznit_128.jpg",
            "isFollowing": false
        },
        {
            "id": "79db4cdd-fd3b-4fcc-8fd6-45d4cd7f0dec",
            "name": "Thomas Murazik",
            "username": "Irma.Langosh89",
            "avater": "https://cdn.fakercloud.com/avatars/josep_martins_128.jpg",
            "isFollowing": false
        },
        {
            "id": "884f5b06-b97d-4c77-a054-9c188419979f",
            "name": "Deron Lueilwitz",
            "username": "Jeffrey_Brekke51",
            "avater": "https://cdn.fakercloud.com/avatars/beshur_128.jpg",
            "isFollowing": false
        },
        {
            "id": "534740ce-b9dc-4e4f-ad47-8a8784fccda3",
            "name": "Matteo Ankunding",
            "username": "Christelle82",
            "avater": "https://cdn.fakercloud.com/avatars/mikaeljorhult_128.jpg",
            "isFollowing": true
        },
        {
            "id": "0f0494d8-011e-4681-acd9-7c33aebc1614",
            "name": "Brenna Johns",
            "username": "Abigayle30",
            "avater": "https://cdn.fakercloud.com/avatars/teddyzetterlund_128.jpg",
            "isFollowing": true
        },
        {
            "id": "44151b06-fa4e-4a7d-864d-150c258e7dfe",
            "name": "Leonie Harvey",
            "username": "Kaylin_Graham",
            "avater": "https://cdn.fakercloud.com/avatars/klimmka_128.jpg",
            "isFollowing": true
        },
        {
            "id": "3c5d4242-ce73-4e76-a336-26aa1588cace",
            "name": "Zackery Rice",
            "username": "Izabella_Hammes",
            "avater": "https://cdn.fakercloud.com/avatars/BryanHorsey_128.jpg",
            "isFollowing": true
        },
        {
            "id": "4d0a4ac8-cbbe-456e-ad08-649a303e8bda",
            "name": "Gregory Oberbrunner",
            "username": "Kariane_Kohler",
            "avater": "https://cdn.fakercloud.com/avatars/vonachoo_128.jpg",
            "isFollowing": false
        },
        {
            "id": "02f90670-65f4-4a2e-8646-c1929039fac6",
            "name": "Hildegard Raynor",
            "username": "Fritz.Spencer",
            "avater": "https://cdn.fakercloud.com/avatars/wegotvices_128.jpg",
            "isFollowing": true
        },
        {
            "id": "a472283c-9c25-4696-985e-f61962b013c3",
            "name": "Antwon Batz",
            "username": "Marcel.Howe",
            "avater": "https://cdn.fakercloud.com/avatars/janpalounek_128.jpg",
            "isFollowing": false
        },
        {
            "id": "4d6f612a-6eb5-4ba6-96d2-6cc19dcff59f",
            "name": "Augusta Mayert",
            "username": "Jessika12",
            "avater": "https://cdn.fakercloud.com/avatars/kalmerrautam_128.jpg",
            "isFollowing": false
        },
        {
            "id": "fb7ffaab-3436-4882-bf0f-90f616f8e3fd",
            "name": "Tanya Jenkins",
            "username": "Chanel.Weissnat66",
            "avater": "https://cdn.fakercloud.com/avatars/adrienths_128.jpg",
            "isFollowing": true
        },
        {
            "id": "ac3170d5-62cf-467b-a020-916a7e646b5e",
            "name": "Lue Lind",
            "username": "Antone.Konopelski",
            "avater": "https://cdn.fakercloud.com/avatars/stan_128.jpg",
            "isFollowing": true
        },
        {
            "id": "fad2dc07-791c-44d5-b7c6-96a88baa5701",
            "name": "Coleman Kassulke",
            "username": "Audie_Greenholt36",
            "avater": "https://cdn.fakercloud.com/avatars/leehambley_128.jpg",
            "isFollowing": true
        },
        {
            "id": "429166fd-dda9-4e6e-bb31-a9126a575931",
            "name": "Melisa Cummings",
            "username": "Jakayla_Treutel22",
            "avater": "https://cdn.fakercloud.com/avatars/batsirai_128.jpg",
            "isFollowing": true
        },
        {
            "id": "5ca60dc7-47c5-4a40-88c5-e34f3cb83f4b",
            "name": "Muriel O'Connell",
            "username": "Kelley_Ortiz20",
            "avater": "https://cdn.fakercloud.com/avatars/increase_128.jpg",
            "isFollowing": false
        },
        {
            "id": "4b9fd1d3-1f28-48a9-85b1-1ffa1534acb6",
            "name": "Isaiah Hackett",
            "username": "Kaycee_Anderson",
            "avater": "https://cdn.fakercloud.com/avatars/mbilderbach_128.jpg",
            "isFollowing": true
        },
        {
            "id": "e5dade29-81af-4832-83af-2680ed503f4e",
            "name": "Heather Douglas",
            "username": "Hyman_Stanton",
            "avater": "https://cdn.fakercloud.com/avatars/victor_haydin_128.jpg",
            "isFollowing": true
        },
        {
            "id": "bd28b752-bc61-49fa-ac10-342de91440bf",
            "name": "Hoyt Wilkinson",
            "username": "Margaret19",
            "avater": "https://cdn.fakercloud.com/avatars/rob_thomas10_128.jpg",
            "isFollowing": true
        },
        {
            "id": "bc91e2b7-5c43-47db-a22b-a809183e66e0",
            "name": "Erick Flatley",
            "username": "Laurine.Nolan18",
            "avater": "https://cdn.fakercloud.com/avatars/gauravjassal_128.jpg",
            "isFollowing": false
        },
        {
            "id": "585de5e7-55dc-444f-bbc7-9b7a62a53736",
            "name": "Jairo Wyman",
            "username": "Maci_Rosenbaum",
            "avater": "https://cdn.fakercloud.com/avatars/timothycd_128.jpg",
            "isFollowing": true
        },
        {
            "id": "f1dd3277-0a9f-4e2b-94bb-75dade7144a8",
            "name": "Jesus Zieme",
            "username": "Arne36",
            "avater": "https://cdn.fakercloud.com/avatars/arpitnj_128.jpg",
            "isFollowing": true
        },
        {
            "id": "2292f07e-8bfb-4447-8d70-bf8c7699d643",
            "name": "Brandt O'Reilly",
            "username": "Florida.Rogahn8",
            "avater": "https://cdn.fakercloud.com/avatars/kohette_128.jpg",
            "isFollowing": false
        },
        {
            "id": "bd3258d2-12a8-481c-a324-93138f1f6c1c",
            "name": "Grayce Greenfelder",
            "username": "Bella_Gleichner",
            "avater": "https://cdn.fakercloud.com/avatars/brandonmorreale_128.jpg",
            "isFollowing": false
        },
        {
            "id": "a8abab0f-f481-4e4d-8e4d-4a964c3b1ace",
            "name": "Aniyah Okuneva",
            "username": "Liliane58",
            "avater": "https://cdn.fakercloud.com/avatars/salleedesign_128.jpg",
            "isFollowing": false
        },
        {
            "id": "1dd0f335-8435-4a07-b940-f3097d737b5e",
            "name": "Marquis Torp",
            "username": "Ismael_Heaney",
            "avater": "https://cdn.fakercloud.com/avatars/joshmedeski_128.jpg",
            "isFollowing": true
        },
        {
            "id": "28fec52a-d603-4d06-aa27-c5268ecfb468",
            "name": "Aliza Littel",
            "username": "Verna8",
            "avater": "https://cdn.fakercloud.com/avatars/kudretkeskin_128.jpg",
            "isFollowing": false
        },
        {
            "id": "a1187e9f-2788-4842-8bdc-77727318a22a",
            "name": "Rosetta Zieme",
            "username": "Sean6",
            "avater": "https://cdn.fakercloud.com/avatars/suprb_128.jpg",
            "isFollowing": false
        },
        {
            "id": "e7cda00c-1109-4fbe-8a53-d4d3c7f30ce8",
            "name": "Celine O'Reilly",
            "username": "Dayna_Ernser",
            "avater": "https://cdn.fakercloud.com/avatars/commadelimited_128.jpg",
            "isFollowing": false
        },
        {
            "id": "15530cb2-e4fe-4552-9b1b-66718d2ca815",
            "name": "Eino Rutherford",
            "username": "Kassandra.Rempel",
            "avater": "https://cdn.fakercloud.com/avatars/ifarafonow_128.jpg",
            "isFollowing": false
        },
        {
            "id": "ea808d0a-006b-4cf9-9285-45db0efa5551",
            "name": "Emely Lemke",
            "username": "Kali42",
            "avater": "https://cdn.fakercloud.com/avatars/BroumiYoussef_128.jpg",
            "isFollowing": false
        },
        {
            "id": "59b208b6-dc34-4c3c-bb6f-2a0d180ec946",
            "name": "Ed Kuhlman",
            "username": "Maiya.Kerluke65",
            "avater": "https://cdn.fakercloud.com/avatars/peachananr_128.jpg",
            "isFollowing": false
        },
        {
            "id": "a4f50f4b-0fc4-4682-a935-a4b9a0653d02",
            "name": "Anika Howe",
            "username": "Chelsey32",
            "avater": "https://cdn.fakercloud.com/avatars/aka_james_128.jpg",
            "isFollowing": true
        },
        {
            "id": "e139f820-5e0c-4ba3-b7b0-929054cd2586",
            "name": "Larissa Bergnaum",
            "username": "Mireya_Rempel",
            "avater": "https://cdn.fakercloud.com/avatars/dc_user_128.jpg",
            "isFollowing": false
        },
        {
            "id": "978d77b9-df6a-45d1-8e0d-368ce6f9bcae",
            "name": "Alessandro Stoltenberg",
            "username": "Wava6",
            "avater": "https://cdn.fakercloud.com/avatars/aaroni_128.jpg",
            "isFollowing": true
        },
        {
            "id": "60a16140-c92c-48d0-aa45-c427adfe498d",
            "name": "Kaia Lockman",
            "username": "Omer64",
            "avater": "https://cdn.fakercloud.com/avatars/nellleo_128.jpg",
            "isFollowing": true
        },
        {
            "id": "8eca61a7-ed69-41f3-9fc7-62e0690d8b92",
            "name": "Norval Stehr",
            "username": "Loyal.Metz85",
            "avater": "https://cdn.fakercloud.com/avatars/weavermedia_128.jpg",
            "isFollowing": false
        },
        {
            "id": "51009704-7014-48f2-a66c-0aa163ca1f9a",
            "name": "Allan Corkery",
            "username": "General.Abernathy52",
            "avater": "https://cdn.fakercloud.com/avatars/ajaxy_ru_128.jpg",
            "isFollowing": false
        },
        {
            "id": "0a8e5071-0753-4db5-808d-7bd4c525672a",
            "name": "Korbin Hilpert",
            "username": "Caleb27",
            "avater": "https://cdn.fakercloud.com/avatars/amandabuzard_128.jpg",
            "isFollowing": false
        },
        {
            "id": "0eb97bd3-1e01-489b-b7f0-c2b55c128293",
            "name": "Zetta Davis",
            "username": "Kennedy_Zieme",
            "avater": "https://cdn.fakercloud.com/avatars/chadengle_128.jpg",
            "isFollowing": false
        },
        {
            "id": "5af76639-e75c-42be-a29e-068b6c8bf2e8",
            "name": "Everett Shanahan",
            "username": "Joannie.Weissnat48",
            "avater": "https://cdn.fakercloud.com/avatars/thibaut_re_128.jpg",
            "isFollowing": false
        },
        {
            "id": "b29f3d91-a864-4fec-97bc-66e2ac295642",
            "name": "Cameron White",
            "username": "Shaniya_Reynolds39",
            "avater": "https://cdn.fakercloud.com/avatars/leehambley_128.jpg",
            "isFollowing": false
        },
        {
            "id": "0a6051eb-d4dc-4c4b-a641-f20e52d5db72",
            "name": "Noel Bins",
            "username": "Opal95",
            "avater": "https://cdn.fakercloud.com/avatars/BrianPurkiss_128.jpg",
            "isFollowing": true
        }
    ]
}

export default picData