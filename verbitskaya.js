var validateCar = (car) => {
    const fields = ['model', 'number'];
    fields.forEach(field => {
        if(!car[field]) {
            print("car." + field + "is required");
            return false;
        }
    })
    return true;
}
var dbw = {
    cars: any = {
        insert: (car) => {
            if (!validateCar(car)) return;
            const result = db.cars.insert(car)
        }
    }
}
