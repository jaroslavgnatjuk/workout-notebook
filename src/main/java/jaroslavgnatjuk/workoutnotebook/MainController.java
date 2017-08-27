package jaroslavgnatjuk.workoutnotebook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

import static org.springframework.http.ResponseEntity.ok;

@RestController
public class MainController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @RequestMapping(value = "/api/exercises", method = RequestMethod.GET)
    public List<Exercise> getExercises() {
        return jdbcTemplate.query("SELECT * FROM exercise", new BeanPropertyRowMapper<>(Exercise.class));
    }

    @RequestMapping(value = "/api/exercise-facts/{exerciseId}", method = RequestMethod.GET)
    public List<ExerciseFact> getExerciseFactsByExerciseId(@PathVariable(value = "exerciseId") int exerciseId) {
        return jdbcTemplate.query("select * from exercise_fact where exercise_id = ? order by dt desc", new BeanPropertyRowMapper<>(ExerciseFact.class), exerciseId);
    }

    @RequestMapping(value = "/api/exercise-facts-all-days", method = RequestMethod.GET)
    public List<Map<String, Object>> getExerciseFactsAllDays() {
        return jdbcTemplate.queryForList("select distinct  date(dt) as dt from exercise_fact order by dt desc");
    }

    @RequestMapping(value = "/api/exercise", method = RequestMethod.POST)
    public ResponseEntity<String> addExercise(@RequestParam(value = "category") String category,
                                              @RequestParam(value = "title") String title) {
        jdbcTemplate.update("INSERT INTO exercise(category, title) VALUES (?, ?)", category, title);

        return ok().body("Exercise added");
    }

    @RequestMapping(value = "/api/exercise", method = RequestMethod.PUT)
    public ResponseEntity<String> editExercise(@RequestBody Exercise exercise) {
        jdbcTemplate.update("update exercise set title = ? where id = ?",
                exercise.getTitle(), exercise.getId());

        return ok().body("Exercise updated");
    }

    @RequestMapping(value = "/api/exercise-facts", method = RequestMethod.POST)
    public ResponseEntity<String> addExerciseFact(@RequestBody ExerciseFact exerciseFact) {
        jdbcTemplate.update("INSERT INTO exercise_fact(exercise_id, count, weight) VALUES (?, ?, ?)",
                exerciseFact.getExerciseId(), exerciseFact.getCount(), exerciseFact.getWeight());

        return ok().body("Exercise fact added");
    }

    @RequestMapping(value = "/api/exercise-facts", method = RequestMethod.GET)
    public List<ExerciseFact> getExerciseFactsByDate(@RequestParam(value = "dt") String dt) {
        return jdbcTemplate.query("SELECT * FROM exercise_fact WHERE date(dt)=cast(? as date) order by dt desc", new BeanPropertyRowMapper<>(ExerciseFact.class), dt);
    }

    @RequestMapping(value = "/api/exercise-facts-today", method = RequestMethod.GET)
    public List<ExerciseFact> getExerciseFactsByToday() {
        return jdbcTemplate.query("SELECT * FROM exercise_fact WHERE cast(dt as date) = current_date order by dt desc", new BeanPropertyRowMapper<>(ExerciseFact.class));
    }

    @RequestMapping(value = "/api/exercise-facts", method = RequestMethod.DELETE)
    public ResponseEntity<String> deleteFact(@RequestParam(value = "id") int id) {
        jdbcTemplate.update("DELETE FROM exercise_fact WHERE id=?", id);

        return ok().body("Exercise fact has been deleted");
    }

}