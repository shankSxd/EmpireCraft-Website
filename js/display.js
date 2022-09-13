function dis()
{
    display = document.getElementById('select').value;

    switch (display)
    {
        case "create":
            document.getElementById('wyswietlacz').innerHTML = "<h1>Create</h1>";
        break;
        case "optifine":
            document.getElementById('wyswietlacz').innerHTML = "<h1>Optifine</h1>";
        break;
    }

}