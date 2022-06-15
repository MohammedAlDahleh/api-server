# api-server
Heroku:<br>
[heroku](https://mdapi-server.herokuapp.com/)<br>

Action:<br>
[action ](https://github.com/MohammedAlDahleh/api-server/actions)<br>

Pull requests:<br>
[Pull-requests](https://github.com/MohammedAlDahleh/api-server/pull/3)<br>

* Routes:

- Food
foodRouter.get('/food', getFoods);
foodRouter.get('/food/:id', getOneFood);
foodRouter.post('/food', addFood);
foodRouter.put('/food/:id', updateFood);
foodRouter.delete('/food/:id', deleteFood);

- Clothe
clothesRouter.get('/clothe', getClothes);
clothesRouter.get('/clothe/:id', getOneClothe);
clothesRouter.post('/clothe', addClothe);
clothesRouter.put('/clothe/:id', updateClothe);
clothesRouter.delete('/clothe/:id', deleteClothe);

* Collection
class:
(constructor)
create
read
update
delete

 * Test:

    ✓ Should respond with 404 status on an invalid route (31 ms)
    ✓ Should respond with 404 status on an invalid method (7 ms)
    ✓ can add a food (56 ms)
    ✓ can get all foods (18 ms)
    ✓ can get one food (16 ms)
    ✓ can update a food (43 ms)
    ✓ can delete a food (38 ms)


    [UML](./Api-server.PNG)