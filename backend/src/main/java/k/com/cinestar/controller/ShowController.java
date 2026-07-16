package k.com.cinestar.controller;

import k.com.cinestar.dto.ShowInCinemaDTO;
import k.com.cinestar.entity.Show;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import k.com.cinestar.service.ShowService;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RestController
@RequestMapping("/api/shows")
@RequiredArgsConstructor
public class ShowController {
    private final ShowService showService;
    @GetMapping("/cinema/{cinemaId}")
    public List<ShowInCinemaDTO> findAllShowsByCinemaId(@PathVariable Integer cinemaId) {
        return showService.findAllShowsByCinemaId(cinemaId);
    }
}
