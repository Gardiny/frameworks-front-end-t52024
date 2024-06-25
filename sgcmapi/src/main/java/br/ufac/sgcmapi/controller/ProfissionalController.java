package br.ufac.sgcmapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.ufac.sgcmapi.model.Profissional;
import br.ufac.sgcmapi.service.ProfissionalService;

@RestController
@RequestMapping("/profissional")
public class ProfissionalController implements IController<Profissional> {

    @Autowired
    private ProfissionalService servico;

    @Override
    @GetMapping("/")
    public ResponseEntity<List<Profissional>> get() {
        List<Profissional> registros = servico.get();
        return ResponseEntity.ok(registros);
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<Profissional> get(@PathVariable("id") Long id) {
        Profissional registro = servico.get(id);
        if (registro == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(registro);
    }

    @Override
    @GetMapping("/busca/{termoBusca}")
    public ResponseEntity<List<Profissional>> get(@PathVariable("termoBusca") String termoBusca) {
        List<Profissional> registros = servico.get(termoBusca);
        return ResponseEntity.ok(registros);
    }

    @Override
    @PostMapping("/")
    public ResponseEntity<Profissional> insert(@RequestBody Profissional objeto) {
        Profissional registro = servico.save(objeto);
        return ResponseEntity.status(HttpStatus.CREATED).body(registro);
    }

    @Override
    @PutMapping("/")
    public ResponseEntity<Profissional> update(@RequestBody Profissional objeto) {
        Profissional registro = servico.save(objeto);
        return ResponseEntity.ok(registro);
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        servico.delete(id);
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }
    
}
