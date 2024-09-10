package dev.aryannvr.RateYourMovie;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import io.github.cdimascio.dotenv.Dotenv;
@SpringBootApplication
@RestController
public class FindYourMovieApplication {

	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.load();
		System.setProperty("env.MONGO_DATABASE", dotenv.get("MONGO_DATABASE"));
		System.setProperty("env.MONGO_URI", dotenv.get("MONGO_URI"));
		SpringApplication.run(FindYourMovieApplication.class, args);
	}

	@GetMapping("/")
	public String apiRoot(){
		return "API Root";
	}
}
