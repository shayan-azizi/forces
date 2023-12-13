function Attracter (constantForce, forcePower) {
    this.constantForce = constantForce;
    this.forcePower = forcePower;

    this.position = createVector(width / 2, height /2);

    this.attract = function (mover) {
        let force = p5.Vector.sub (this.position, mover.position);

        let distance = force.mag();
        
        let strenght = this.constantForce / distance ** forcePower;
        force.setMag (strenght);

        mover.applyForce (force);
    }

    this.update = function () {
        push ();
        fill (255, 0, 100)
        translate (this.position.x, this.position.y)
        circle (0, 0, 10);
        pop()

        
    }
}