package jaroslavgnatjuk.workoutnotebook;

import java.util.Date;

public class Exercise {
    private int id;
    private String category;
    private String title;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Exercise() {}

    public Exercise(int id, String category, String title) {
        this.id = id;
        this.category = category;
        this.title = title;
    }
}
