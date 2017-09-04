package jaroslavgnatjuk.workoutnotebook;

import java.util.Date;

public class ExerciseFact {
    private int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    private int exerciseId;
    private Date dt;
    private int count;
    private int weight;

    public int getExerciseId() {
        return exerciseId;
    }

    public void setExerciseId(int exerciseId) {
        this.exerciseId = exerciseId;
    }

    public Date getDt() {
        return dt;
    }

    public void setDt(Date dt) {
        this.dt = dt;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public ExerciseFact() {}

    public ExerciseFact(int exerciseId, Date dt, int count, int weight) {
        this.exerciseId = exerciseId;
        this.dt = dt;
        this.count = count;
        this.weight = weight;
    }
}
