function parseCount(kolvo) {
    let result = Number.parseFloat(kolvo);
    if (isNaN(result)) {
      throw new Error("Невалидное значение");
    }
    return result;
}

function validateCount(value) {
    try {
      return parseCount(value);
    } 
    catch (error) {
      return error;
    }
  }

  // Task 2

  class Triangle {
    constructor(a, b, c) {

        if(((a + b) < c) || ((a + c) < b) || ((c + b) < a)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this.a = a;
        this.b = b;
        this.c = c;
        
    }

    get perimeter() {
        return (this.a + this.b + this.c);
      }

    get area() {
        const p = +this.perimeter/2;
        const S = +(Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c))).toFixed(3);
        return S;
      }

  }

  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      const tr = {
        get area() {
          return "Ошибка! Треугольник не существует"
        },
        get perimeter() {
          return "Ошибка! Треугольник не существует"
        }
      }
      return tr;
    }
  }
