document.getElementById('imageUpload').addEventListener('change', function(e) {
  const file = e.target.files[0];
  const preview = document.getElementById('imagePreview');
  if (file) {
    preview.src = URL.createObjectURL(file);
    preview.style.display = 'block';
  } else {
    preview.src = '';
    preview.style.display = 'none';
  }
});

document.getElementById('videoUpload').addEventListener('change', function(e) {
  const file = e.target.files[0];
  const preview = document.getElementById('videoPreview');
  if (file) {
    preview.src = URL.createObjectURL(file);
    preview.style.display = 'block';
  } else {
    preview.src = '';
    preview.style.display = 'none';
  }
});
