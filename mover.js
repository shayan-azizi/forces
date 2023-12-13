function Mass (x, y, vel_x, vel_y, radius) {
    this.radius = radius;
    this.position = createVector(x, y);
    this.velocity = createVector(vel_x, vel_y);
    this.acceleration = createVector();

    this.applyForce = function (force) {
        this.acceleration.add(force);
    }

    this.update = function () {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);

    }

    this.show = function () {
        push ();
        translate (this.position.x, this.position.y);
        rotate (this.velocity.heading());

        circle (0, 0, this.radius)
        pop()

    }

}