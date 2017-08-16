package jaroslavgnatjuk.workoutnotebook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

@RestController
public class MainController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @RequestMapping(value = "/api/exercises", method = RequestMethod.GET)
    public List<Exercise> getExercises() {
        return jdbcTemplate.query("SELECT * FROM exercise", new BeanPropertyRowMapper<>(Exercise.class));
    }

    @RequestMapping(value = "/api/exercise-facts", method = RequestMethod.POST)
    public ResponseEntity<String> addExerciseFact(@RequestParam(value = "exerciseId") String exerciseId,
                                          @RequestParam(value = "count") String count,
                                          @RequestParam(value = "weight") String weight) {
        jdbcTemplate.query("INSERT INTO exercise_fact(exercise_id, count, weight) VALUES (?, ?, ?)", new BeanPropertyRowMapper<>(ExerciseFact.class),
                exerciseId, count, weight);

        return ok().body("Exercise fact added");
    }

    @RequestMapping(value = "/api/exercise-facts", method = RequestMethod.GET)
    public List<ExerciseFact> getExerciseFactsByDate(@RequestParam(value = "dt") String dt) {
        return jdbcTemplate.query("SELECT * FROM exercise_fact WHERE dt=?", new BeanPropertyRowMapper<>(ExerciseFact.class), dt);
    }

}