package jaroslavgnatjuk.workoutnotebook;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @RequestMapping("/greeting")
    public Object greeting(@RequestParam(value="dt") String dt) {
        System.out.println(dt);
        return new String("asd");
    }
}