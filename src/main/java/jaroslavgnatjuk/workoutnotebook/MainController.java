package jaroslavgnatjuk.workoutnotebook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MainController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @RequestMapping("/api/exercises")
    public List<Exercise> greeting(@RequestParam(value="dt") String dt) {
        return jdbcTemplate.query("select * from exercise", new BeanPropertyRowMapper<>(Exercise.class));
    }

}