package jaroslavgnatjuk.workoutnotebook;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.regex.Pattern;

@Component(value = "Html5ModeUrlSupportFilter")
public class Html5ModeUrlSupportFilter extends OncePerRequestFilter {

    @Autowired
    private Environment env;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws IOException, ServletException {
        System.out.println(request.getRequestURI());
        if (isStatic(request) || isApi(request)) {
            filterChain.doFilter(request, response);
        } else {
            request.getRequestDispatcher(env.getProperty("app.url.index")).forward(request, response);
        }
    }

    private boolean isApi(HttpServletRequest request) {
        return request.getRequestURI().contains(env.getProperty("app.url.api"));
    }

    private boolean isStatic(HttpServletRequest request) {
        return Pattern.matches(env.getProperty("app.staticFileTypes"), request.getRequestURI());
    }
}